import Portfolio from '@components/portfolio';
import Services from '@components/services';
import { ToastContainer } from 'react-toastify';
import Pagelayout from '@layout/pagelayout';
import ContactForm from '@components/contactForm';
import AnimationWrapper from '@components/animationWrapper';

export default function Homepage() {
    return (
        <Pagelayout>
            <AnimationWrapper>
                <Services />
            </AnimationWrapper>
            <AnimationWrapper>
                <Portfolio />
            </AnimationWrapper>
            <AnimationWrapper>
                <ContactForm />
            </AnimationWrapper>
            <ToastContainer />
        </Pagelayout>
    );
}
