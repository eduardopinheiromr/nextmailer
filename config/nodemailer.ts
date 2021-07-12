const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: process.env.GMAIL_PORT,
  host: process.env.GMAIL_HOST,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
  secure: true,
});

export { transporter };
