import React from 'react';
import Button from './button';
import AppSlider from './slider';

export default function Services() {
    return (
        <section className='services'>
            <AppSlider />
            <Button text='Learn More' />
            <style jsx>
                {`
                    .services {
                        border-bottom: 1px solid gray;
                        margin-bottom: 40px;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }
                `}
            </style>
        </section>
    );
}
