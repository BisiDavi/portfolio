import dynamic from "next/dynamic";

import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import ContactForm from "@/components/contactForm";

const Pagelayout = dynamic(() => import("@/layout/pagelayout"), { ssr: false });

export default function Homepage() {
    return (
        <Pagelayout>
            <Services />
            <Portfolio />
            <ContactForm />
        </Pagelayout>
    );
}
