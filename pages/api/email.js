import { createTransport } from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;

let transporter = createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Jacob Eggli - Web Development: ${req.body.name}`,
        text: req.body.message,
      };

      console.log("Mail Options Set");

      transporter.sendMail(mailOptions);
    }
  } catch (error) {
    res.status(500).send({ status: "fail" });
    return;
  }

  res.status(200).json({ status: "success" });
};

export default handler;
