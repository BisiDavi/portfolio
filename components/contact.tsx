import React from 'react';
import styles from '@styles/styles.module.css';

export default function Contact() {
    return (
        <section id='contact' className={`contact ${styles.contact}`}>
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
                        font-family: 'Raleway', sans-serif;
                    }
                    .contact h3 {
                        margin: 30px auto;
                    }
                    .contact form {
                        display: flex;
                        flex-direction: column;
                    }
                    .contact form label {
                        margin-bottom: 20px;
                    }
                    .contact form input::placeholder {
                        text-align: center;
                        font-weight: bold;
                        font-size: 20px;
                        font-family: 'Raleway', sans-serif;
                    }
                    .contact form input {
                        height: 40px;
                        border-radius: 25px;
                        margin-bottom: 20px;
                    }
                `}
            </style>
        </section>
    );
}
