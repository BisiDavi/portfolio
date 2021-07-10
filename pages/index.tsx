import Contact from '@components/contact';
import Portfolio from '@components/portfolio';
import Services from '@components/services';
import Pagelayout from '@layout/pagelayout';

export default function Homepage() {
    return (
        <Pagelayout>
            <Services />
            <Portfolio />
            <Contact />
        </Pagelayout>
    );
}
