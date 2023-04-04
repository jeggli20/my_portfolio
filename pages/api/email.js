import { createTransport } from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
const clientId = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;
const refreshToken = process.env.OAUTH_REFRESH_TOKEN;

let transporter = createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: user,
    pass: pass,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  },
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Jacob Eggli - Web Development: ${req.body.name}`,
      text: req.body.message,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        res.status(500).json({
          status: "fail",
        });
      } else {
        console.log("== Message sent ==");
        res.status(200).json({ status: "success" });
      }
    });

    res.status(200).json({});
  }
};

export default handler;
