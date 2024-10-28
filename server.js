
// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");
const compression = require('compression')


dotenv.config(); // تحميل متغيرات البيئة من ملف .env

const app = express();
const PORT = process.env.PORT || 3800;

app.use(express.json()); // إعداد معالجة بيانات الطلبات

app.use(cors()); // السماح بطلبات من جميع المصادر
app.use(express.urlencoded({ extended: true }));
app.use(compression())


app.use("/", routes); // استخدام المسارات المعرّفة في ملف routes


app.listen(PORT, () => { // تشغيل السيرفر

  console.log(`Server running on http://localhost:${PORT}`);

});







