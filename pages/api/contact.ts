import connectToDatabase from '../../utils/connectToDb';
import ContactForm from '../../model/contact';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase().then((response) => {
        console.log('response, connected', response);
    });

    switch (method) {
        case 'POST':
            try {
                const postContact = await ContactForm.create(req.body);
                return res.status(201).json({
                    success: true,
                    data: postContact,
                });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
        default:
            return res.status(400).json({ success: false });
            break;
    }
}
