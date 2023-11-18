// pages/api/sendMailchimpEmail.js

import { NextApiRequest, NextApiResponse } from 'next';
const mailchimp = require('@mailchimp/mailchimp_transactional')('YOUR_MAILCHIMP_API_KEY');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }


  try {
    const response = await mailchimp.messages.send({
      message: {
        from_email: 'saga@sagapc.com.br',
        subject: 'hello world',
        to: 'thomaz639@gmail.com',
        html: '<strong>it works!</strong>',
      },
    });


    

    res.status(response.status).json({ success: true, response: response.data });
  } catch (error) {
    console.error('Mailchimp API Error:');
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
