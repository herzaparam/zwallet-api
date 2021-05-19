const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const host = process.env.HOST;
const port = process.env.PORT_FRONTEND;
const link = `http://${host}:${port}`;
const email = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  })
);

const send = (destination, token, type) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (type === "verify") {
        const info = await transporter.sendMail({
          from: email,
          to: destination,
          subject: "Account Verification",
          html: `Click this link to verify your account : <a href="${link}/register/activation/?email=${destination}&token=${token}">Activate</a>`,
        });
        resolve(info);
      } else if (type === "forgot") {
        const info = await transporter.sendMail({
          from: email,
          to: destination,
          subject: "Reset Password",
          html: `Click this link to reset your password : <a href="${link}/forgot-pass/${destination}/${token}">Reset Password</a>`,
        });
        resolve(info);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  send,
};
