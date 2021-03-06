import Button from './button';
import AppSlider from './slider';
import styles from '@styles/styles.module.css';

export default function Services() {
    return (
        <section id='services' className={styles.services}>
            <AppSlider />
            <div className={styles.learnMore}>
                <a href='#portfolios'>
                    <Button text='Learn More' />
                </a>
            </div>
            <style jsx>
                {`
                    .services {
                        border-bottom: 1px solid gray;
                        margin-bottom: 40px;
                        margin: auto;
                        justify-content: center;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }
                `}
            </style>
        </section>
    );
}
