import React from 'react';
import Button from '@components/button';
import styles from '@styles/styles.module.css';

export default function Banner() {
    return (
        <div className={`banner hero ${styles.banner}`}>
            <div className='text'>
                <h5>Hello</h5>
                <h1>
                    <span className='intro'>I&#39;m</span>
                    <span className='name'>Olubisi David Anderson</span>
                </h1>
                <p>A Full Stack JavaScript Engineer</p>
                <div className='button-group'>
                    <a href='/resume.pdf' download='Olubisi_david.pdf'>
                        <Button text='Resume' bgColor='white' color='black' />
                    </a>
                    <a href='#contact'>
                        <Button text='Contact me' />
                    </a>
                </div>
            </div>
            <style jsx>
                {`
                    .banner {
                        background-image: url('/wave.svg');
                        height: 350px;
                        display: flex;
                        background-size: cover;
                        margin: auto;
                        background-position: center;
                    }
                    .text {
                        justify-content: center;
                        color: white;
                        margin: 80px auto;
                        height: 180px;
                        font-family: 'Raleway', sans-serif;
                    }
                    .text h1 {
                        font-size: 25px;
                    }
                    .text h1,
                    .text h5 {
                        margin: 10px 0;
                        font-family: 'Raleway', sans-serif;
                    }
                    .button-group {
                        display: flex;
                        align-items: center;
                        width: 280px;
                        justify-content: space-between;
                    }
                    .intro {
                        margin: 0px 5px;
                        color: black;
                    }
                    .name {
                        margin: 0px 5px;
                    }
                    .text h5 {
                        font: normal normal 24px/25px 'Roboto', sans-serif;
                        font-family: 'Raleway', sans-serif;
                    }
                    .text p {
                        font-family: 'Raleway', sans-serif;
                        font: normal normal 20px/22px 'Roboto', sans-serif;
                    }

                    @media (max-width: 500px) {
                        .text h1,
                        .text h5 {
                            font: normal normal 18px/20px 'Raleway', sans-serif;
                        }

                        .text p {
                            font: normal normal 16px/20px 'Raleway', sans-serif;
                        }
                    }
                `}
            </style>
        </div>
    );
}
