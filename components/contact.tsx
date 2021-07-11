import { useState } from 'react';
import Button from './button';
import styles from '@styles/styles.module.css';

export default function Contact() {
    const [contact, setContact] = useState({
        email: '',
        message: '',
    });
    function handleChange(e) {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    }

    function submitForm(e) {
        e.preventDefault();
        fetch('/api/contact', {
            body: JSON.stringify(contact),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    console.log('contact', contact);
    return (
        <section id='contact' className={`contact ${styles.contact}`}>
            <h3>Get in touch</h3>

            <form>
                <label htmlFor='email'>EMAIL</label>
                <input
                    id='email'
                    name='email'
                    onChange={handleChange}
                    type='email'
                    placeholder='Email'
                />
                <label htmlFor='message'>MESSAGE</label>
                <textarea
                    name='message'
                    id='message'
                    rows={10}
                    onChange={handleChange}
                    cols={50}
                ></textarea>
                <div className='button'>
                    <Button onClick={submitForm} text='Submit' />
                </div>
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
                    .button {
                        width: 200px;
                        margin: 20px auto;
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

                    @media (max-width: 500px) {
                        section#contact form {
                            width: 70%;
                            margin: auto;
                        }
                    }
                `}
            </style>
        </section>
    );
}
