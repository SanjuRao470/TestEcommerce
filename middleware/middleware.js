const jwt = require("jsonwebtoken");
const userModal = require("../model/userSchema"); // Import your User model

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract the token from the "Authorization" header

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify the token using your JWT secret key

    // Find the user based on the userID stored in the token
    const user = await userModal.findById(decoded.userID);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach the user object to the request for further processing in other middleware or route handlers
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
