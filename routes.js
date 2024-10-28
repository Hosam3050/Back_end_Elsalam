
// routes.js

const express = require("express");
const { upload } = require("./config");
const { sendEmail } = require("./mailer");

const router = express.Router();

router.post("/send-form", upload.single("file"), async (req, res) => {  //   لاستلام بيانات الفورم

  try {
    const { name, email, option } = req.body;
    const file = req.file ? req.file.path : "";

    
    const mailOptions = {      // إعداد الرسالة

      from: process.env.EMAIL_FROM || ".....@gmail.com",
      to: process.env.EMAIL_TO || ".....@gmail.com",
      subject: "IT Support",
      text: `You have a new Problem:\n\nName: ${name}\nEmail: ${email}\nProblem: ${option}\n`,
      attachments: file ? [{ path: file }] : [],
    };

    
    
    const emailSent = await sendEmail(mailOptions);      // إرسال البريد الإلكتروني

    if (emailSent) {
      res.send("Form submitted successfully!");
    } else {
      res.status(500).send("Error sending email");
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Error processing the form");
  }
});

module.exports = router;


