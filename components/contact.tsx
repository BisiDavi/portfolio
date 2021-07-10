import React from 'react';
import styles from '@styles/styles.module.css';

export default function Contact() {
    return (
        <section className={`contact ${styles.contact}`}>
            <h3>Get in touch</h3>

            <form>
                <label htmlFor='email'>EMAIL</label>
                <input id='email' type='email' placeholder='Email' />
                <label htmlFor='message'>MESSAGE</label>
                <textarea id='message' rows={10} cols={50}></textarea>
            </form>
            <style jsx>
                {`
                    .contact {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 30px;
                    }
                    .contact h3 {
                        margin: 30px auto;
                    }
                    .contact form {
                        display: flex;
                        flex-direction: column;
                    }
                    .contact form label {
                        margin: 10px 0;
                    }
                    .contact form input {
                        height: 40px;
                        border-radius: 25px;
                    }
                `}
            </style>
        </section>
    );
}
