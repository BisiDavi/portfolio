import Button from "@/components/button";
import AppSlider from "@/components/slider";
import AnimationWrapper from "@/components/animationWrapper";
import styles from "@/styles/styles.module.css";

export default function Services() {
    return (
        <AnimationWrapper>
            <section className={styles.services}>
                <span id="services"></span>
                <AppSlider />
                <style jsx>
                    {`
                        #services {
                            margin-top: -100px;
                            position: absolute;
                        }
                    `}
                </style>
            </section>
        </AnimationWrapper>
    );
}
