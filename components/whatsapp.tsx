import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export default function WhatsAppChatWidget() {
    return (
        <WhatsAppWidget
            phoneNumber='2347031653411'
            message="I'm Dave a full stack web developer, how may I be of help."
            companyName='O.David'
        />
    );
}
