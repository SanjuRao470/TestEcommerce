const productModel = require('../model/productSchema');
const cloudinaryUploadImg = require('../utils/cloudinary');


class productController {
  static createProduct = async (req, res) => {
    try {
      const { title, price, slug, description, quantity, color } = req.body;
      // console.log(title, price, slug, description, quantity,color);
      console.log(req.body);
      const newProduct = new productModel({
        title,
        price,
        slug,
        description,
        quantity,
        color,
      });
      await newProduct.save();
      res.status(201).json({
        message: "product created successfully",
        newProduct,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to create product",
        error: error.message, // Include the error message for debugging
      });
    }
  };

  static getSingleProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const findProduct = await productModel.findById(id);
      if (!findProduct) {
        res.status(404).json({
          status: "failed",
          message: "no match product ",
        });
      }
      res.json(findProduct);
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: " An error occurred",
        error: error.message,
      });
    }
  };
  static getAllProduct = async (req, res) => {
    try {
      const productList = await productModel.find( {
        
        
      });
      if (!productList || productList.length === 0) {
        return res.status(404).json({
          status: "failed",
          message: "No products found",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "data fetch successfully",
        productList: productList,
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "internal server error",
        error: error.message,
      });
    }
  };
  static updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({
          status: "failed",
          message: "no match data",
        });
      }
      const updatedata = await productModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        status: "success",
        message: "product Updated successfully",
        updatedata: updatedata,
      });
    } catch (error) {
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
        error: error.message,
      });
    }
  };
  static deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          status: "failed",
          message: "product data is not found",
        });
      }
      const deletedData = await productModel.findByIdAndDelete(id);
      return res.status(200).json({
        status: "success",
        message: "product data deleted successfully",
        deletedData: deletedData
      });
      
    } catch (error) {
      return res.status(500).json({
        status:"failed",
        message:"internal server error",
        error:error.message
      })
    }
  };
  static uploadImages = async (req, res) => {
    const { id } = req.params;
    console.log(id);
  
    try {
      const uploader = async(path) =>  await cloudinaryUploadImg(path, {resource_type:"image"});
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        console.log(file)
        const newpath = await uploader(path);
        console.log(newpath);
        urls.push(newpath);
      }
  
      const findProduct = await productModel.findByIdAndUpdate(
        id,
        {
          images: urls.map((file) => {
            return file;
          }),
        },
        {
          new: true,
        }
      );
  
      console.log(findProduct);
      res.json({
        findProduct: findProduct,
        message: 'Images uploaded and product updated successfully', // Fixed success message
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
 
  
  
}
module.exports = productController;
