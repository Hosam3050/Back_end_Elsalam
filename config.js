// config.js
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({  // لتحميل الملفات 
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // تسمية الملفات
  },
});

const upload = multer({ storage: storage });

module.exports = {
  upload,
};
