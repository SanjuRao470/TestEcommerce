const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { upload, productImgResize } = require("../middleware/uploadImages");

router.post("/createProduct", productController.createProduct);
router.get("/getSingleProduct/:id", productController.getSingleProduct);
router.get("/getAllUser", productController.getAllProduct);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deletedData/:id", productController.deleteProduct);
router.put(
  "/upload/:id",
  upload.array("images", 10),
  productImgResize,
  productController.uploadImages
);

module.exports = router;
