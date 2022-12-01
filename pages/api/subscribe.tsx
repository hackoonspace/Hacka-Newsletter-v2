import type { NextApiRequest, NextApiResponse } from 'next';
import emailSchema from '../../schemas/Email';
import Email from '../../models/Email';
import { SubscribeResponse } from '../../types/API';
import { validateToken } from '../../utils/Recaptcha';

export default async function handler(req: NextApiRequest, res: NextApiResponse<SubscribeResponse>) {
    try {
        const { email, token } = await emailSchema.validate(req.body);

        const recaptchaValidateResponse = await validateToken(token);

        if (!recaptchaValidateResponse) 
            return res.status(400).json({ status: 'recaptchaError' });

        const emailModel = new Email();
        
        const databaseResponse = await emailModel.insertEmailToDatabase(email);

        if (databaseResponse)
            return res.status(200).json({ status: 'success' });

        res.status(400).json({ status: 'fail' });
    } catch (error) {
        res.status(400).json({ status: 'fail' });
    }
}
