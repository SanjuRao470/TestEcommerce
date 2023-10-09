const cloudinary = require("cloudinary").v2;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.KLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const cloudinaryUploadImg = async (fileToUpload, options = {}) => {
  options.transformation = {
    width: 300,
    height: 300,
    // crop: "fill"
  };

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(fileToUpload, options, (error, result) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve({
          url: result.secure_url,
          public_id: result.public_id,
        });
      }
    });
  });
};

module.exports = cloudinaryUploadImg;
