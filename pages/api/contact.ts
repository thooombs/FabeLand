import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const SES_REGION = 'us-east-1';
  const SES_ACCESS_KEY_ID = process.env.SES_ACCESS_KEY_ID;
  const SES_SECRET_ACCESS_KEY = process.env.SES_SECRET_ACCESS_KEY;

  const ses = new AWS.SES({
    region: SES_REGION,
    accessKeyId: SES_ACCESS_KEY_ID,
    secretAccessKey: SES_SECRET_ACCESS_KEY,
  });

  const params = {
    Source: "Saga <saga@sagapc.com.br>",
    Destination: {
      ToAddresses: ["thomaz639@gmail.com"],
    },
    Message: {
      Subject: {
        Data: "hello world",
      },
      Body: {
        Html: {
          Data: "<strong>it works!</strong>",
        },
      },
    },
  };

  try {
    const data = await ses.sendEmail(params).promise();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
}
