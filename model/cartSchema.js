const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true },
      productDetails: { type: String }, // Additional field to store product details
      image: { type: String }, // Field to store image URL
      productName:{type:String},
      price:{type:Number}
    },
    {
      timestamps: true,
    }
  );
  

const cartModel = mongoose.model("Cart", cartSchema);
module.exports = cartModel;
