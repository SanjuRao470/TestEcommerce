const userModel = require("../model/userSchema");
const productModel=require('../model/productSchema')
const Cart=require('../model/cartSchema')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

class userController {
  static userSignup = async (req, res) => {
    const { username, mobilno, password } = req.body;

    try {
      // Validate inputs
      if (!username || !mobilno || !password) {
        return res.status(400).json({
          status: "failed",
          message: "All fields are required",
        });
      }

      // Check if the user already exists
      const user = await userModel.findOne({ mobilno });
      if (user) {
        return res.status(400).json({
          status: "failed",
          message: "User already exists",
        });
      }

      // Ensure password and confirmPassword match
      // Uncomment this if needed
      // if (password !== confirmPassword) {
      //   return res.status(400).json({
      //     status: "failed",
      //     message: "Passwords do not match",
      //   });
      // }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const newUser = new userModel({
        username: username,
        mobilno: mobilno,
        password: hashPassword, // Store the hashed password
      });

      // Save the user to the database
      await newUser.save();

      // Generate a JWT token
      const savedUser = await userModel.findOne({ mobilno });
      const token = jwt.sign(
        { user_id: savedUser._id },
        process.env.SECRET_KEY,
        { expiresIn: "10d" }
      );

      return res.status(201).json({
        status: "success",
        message: "Signup successful",
        token: token,
        newUser: newUser,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "An error occurred during registration",
        error: error.message,
      });
    }
  };

  static userLogin = async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(username, password);
      if (!username || !password) {
        return res.status(400).json({
          status: "failed",
          message: "mobilno and password are required",
        });
      }
      const user = await userModel.findOne({ username });
      if (!user) {
        return res.status(404).json({
          status: "failed",
          message: "user not found",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY, {
          expiresIn: "10h",
        });
        return res.status(200).json({
          status: "success",
          message: "Login successfull",
          token: token,
        });
      } else {
        return res.status(401).json({
          status: "failed",
          message: "Invalid credential",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  };
  static changePassword = async (req, res) => {
    try {
      const { password, confirmPassword } = req.body;

      // Check if password and password_confirmation match
      if (password !== confirmPassword) {
        return res
          .status(400)
          .json({ status: "failed", message: "Passwords do not match" });
      }

      // Generate a salt and hash the new password
      const salt = await bcrypt.genSalt(10);
      const newPasswordHash = await bcrypt.hash(password, salt);

      // Update the user's password in the database
      await userModel.findByIdAndUpdate(req.user._id, {
        password: newPasswordHash,
      });

      res
        .status(200)
        .json({ status: "success", message: "Password changed successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  };

  static userCart = async (req, res) => {
     
  const { productId, quantity, productDetails, image } = req.body;
  
    try {
      // Validate the input
      if (!productId || !quantity || quantity <= 0) {
        return res.status(400).json({ error: 'Invalid input' });
      }
  
      // Check if the product is already in the cart
      let existingItem = await Cart.findOne({ productId });
  
      if (existingItem) {
        // If the product already exists in the cart, update the quantity
        existingItem.quantity += quantity;
        await existingItem.save(); // Save the updated item
      } else {
        // If the product is not in the cart, add it as a new item
        const newItem = new Cart({ productId, quantity, productDetails, image });
        await newItem.save();
      }
  
      // Fetch updated cart items after addition
      const cartItems = await Cart.find();
  
      res.status(200).json({ message: 'Item added to cart successfully', cartItems });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
  
  };
  
  
  

  // static forgetPassword = async (req, res) => {
  //   try {
  //     const { mobilno } = req.body;

  //     const user = await userModel.findOne({ mobilno });

  //     if (!user) {
  //       return res.status(404).json({
  //         status: "failed",
  //         message: "User not found",
  //       });
  //     }

  //     const resetToken = jwt.sign(
  //       { userID: user._id },
  //       process.env.SECRET_KEY,
  //       { expiresIn: "1h" }
  //     );

  //     const transporter = nodemailer.createTransport({
  //       host: 'smtp.ethereal.email',
  //       port: 587,
  //       auth: {
  //           user: 'hadley.rau@ethereal.email',
  //           pass: 'DH9DcC2UxEFg2pyBdZ'
  //       }
  //   });

  //     const mailOptions = {
  //       from: "hadley.rau@ethereal.email",            // Replace with your Gmail email
  //       to: "rrahulkumaryadav347@gmail.com",        // Replace with the recipient's email
  //       subject: "Password Reset Request",
  //       text: `To reset your password, click on the following link: ${process.env.APP_URL}/reset-password/${resetToken}`,
  //     };

  //     transporter.sendMail(mailOptions, (error, info) => {
  //       if (error) {
  //         console.error(error);
  //         return res
  //           .status(500)
  //           .json({ status: "error", message: "Failed to send email" });
  //       } else {
  //         console.log(`Email sent: ${info.response}`);
  //         return res.status(200).json({
  //           status: "success",
  //           message: "Password reset link sent to your email",
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     res
  //       .status(500)
  //       .json({ status: "error", message: "Internal server error" });
  //   }
  // };
}

module.exports = userController;
