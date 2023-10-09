const multer = require("multer");
const sharp = require("sharp");
const path = require("path");

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif']; // Add more mime types as needed

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file format'));
  }
};


const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 2000000 }, // Adjusted field name to fileSize
});
const productImgResize = (req, res, next) => {
  if (!req.files || req.files.length === 0) return next();

  try {
    const resizePromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        sharp(file.path)
          .resize(300, 300)
          .toFormat('jpeg')
          .jpeg({ quality: 90 })
          .toFile(`public/images/product/${file.filename}`, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
      });
    });

    Promise.all(resizePromises)
      .then(() => {
        next();
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

module.exports = productImgResize;


module.exports = { upload,productImgResize };
