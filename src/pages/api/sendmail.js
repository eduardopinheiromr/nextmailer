const handler = (req, res) => {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: process.env.GMAIL_PORT,
    host: process.env.GMAIL_HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>
    <h1>${req.body.name}</h1>
    <p>${req.body.email}</p>
    ${req.body.message}
    </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).send({
    message: "Email sended!",
  });
};

export default handler;
