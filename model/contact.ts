import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    email: { type: String },
    message: { type: String },
});

export default mongoose.models.ContactForm ||
    mongoose.model('ContactForm', ContactSchema);
