const nodemailer = require("nodemailer");

const emailVerification = async (email) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "agitest93@gmail.com",
        pass: `${process.env.EMAILPASSWORD}`,
      },
    });

    let info = await transporter.sendMail({
      from: '"Test Agit Website" <agitest93@gmail.com>',
      to: `${email}`,
      subject: "Register Hando",
      html: `<p>Selamat</p>
            <p>Akun anda telah terdaftar di Hando website.</p>
            <i>Hando adalah website yang dibuat dalam rangka mengikuti tes masuk agit</i>`,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.log(err);
  }
};

module.exports = emailVerification;
