import React from 'react';
import Button from '@components/button';
import styles from '@styles/theme.module.css';

export default function Banner() {
    return (
        <div className={`banner hero ${styles.banner}`}>
            <div className='text'>
                <h5>Hello</h5>
                <h1>
                    <span className='intro'>I&#39;m</span>
                    <span className='name'>Olubisi David Anderson</span>
                </h1>
                <p>A Full Stack Engineer</p>
                <div className='button-group'>
                    <Button text='Resume' bgColor='white' color='black' />
                    <Button text='Contact me' />
                </div>
            </div>
            <style jsx>
                {`
                    .banner {
                        background-image: url('/wave.svg');
                        height: 500px;
                        display: flex;
                        background-size: cover;
                        margin: auto;
                    }
                    .text {
                        justify-content: center;
                        color: white;
                        margin: 80px auto;
                        height: 180px;
                    }
                    .text h1,
                    .text h5 {
                        margin: 10px 0;
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
                    }
                    .text p {
                        font: normal normal 20px/22px 'Roboto', sans-serif;
                    }
                `}
            </style>
        </div>
    );
}
