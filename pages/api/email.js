import { renderToString } from "react-dom/server";
import { createTransport } from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

import Email from "../../components/email/Email";

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
  if (req.method === "POST") {
    try {
      const data = req.body;
      const dataObj = JSON.parse(data);

      const email = renderToString(<Email emailObj={dataObj} />);

      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Jacob Eggli - Web Development: ${dataObj.fName} ${dataObj.lName}`,
        text: "Email text",
        html: email,
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      res.status(500).send({ status: "fail" });
      return;
    }

    res.status(200).json({ status: "success" });
  }
};

export default handler;
