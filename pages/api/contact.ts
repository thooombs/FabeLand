import { NextApiRequest, NextApiResponse } from "next";
const mailchimp = require('@mailchimp/mailchimp_transactional')('f3b601808a1bacef67f6f5892925474b');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = {
    from_email: "saga@sagapc.com.br",
    subject: "hello world",
    to: [
      {
        email: "thomaz639@gmail.com",
        type: "to",
      },
    ],
    html: "<strong>it works!</strong>",
  };

  try {
    const response = await mailchimp.messages.send({ message });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
}
