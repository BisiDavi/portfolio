import Portfolio from '@components/portfolio';
import Services from '@components/services';
import { ToastContainer } from 'react-toastify';
import Pagelayout from '@layout/pagelayout';
import ContactForm from '@components/contactForm';

export default function Homepage() {
    return (
        <Pagelayout>
            <Services />
            <Portfolio />
            <ContactForm />
            <ToastContainer />
        </Pagelayout>
    );
}
