import React from 'react';

export default function Button({ text, bgColor = 'black' }: ButtonProps) {
    return (
        <>
            <button className='button'>{text}</button>
            <style jsx>{`
                .button {
                    color: white;
                    background-color: ${bgColor};
                    border-radius: 5px;
                    padding: 15px 20px;
                    font: normal normal 16px/18px 'Roboto', sans-serif;
                    border: none;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

interface ButtonProps {
    text: string;
    bgColor?: string;
}
