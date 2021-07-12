const { transporter } = require("../../config/nodemailer");

const sendEmailHandler = (req, res) => {
  const mailData = {
    from: process.env.GMAIL_EMAIL,
    to: req.body.email,
    subject: `Mensagem de ${req.body.name}`,
    text: req.body.message,
    html: `<div>
    <h1>${req.body.name}</h1>
    <p>${req.body.email}</p>
    Mensagem: 
    ${req.body.message}
    </div>`,
  };

  transporter.sendMail(mailData, (info, err) => {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).send({
    message: "Email sended!",
  });
};

export default sendEmailHandler;
