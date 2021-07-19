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

  transporter.sendMail(mailData, (err, info) => {
    if (err) return res.status(500).send({ err });
    else res.status(200).send({ message: "Email sended!" });
  });
};

export default sendEmailHandler;
