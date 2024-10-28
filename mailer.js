

require("dotenv").config(); // هنا يتم تحميل المتغيرات للبيئه 

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER, // البريد الإلكتروني
    pass: process.env.EMAIL_PASS, // كلمة المرور 
  },
});

const sendEmail = async (mailOptions) => {  //  لإرسال البريد الإلكتروني

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.log("Error sending email:", error);
    return false;
  }
};


module.exports = {
  sendEmail,
};




  

