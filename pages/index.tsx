import React from 'react';
import Pagelayout from '@layout/pagelayout';
import { Button } from '@components/.';

export default function Homepage() {
    return (
        <Pagelayout>
            <div className='homepage'>
                <div className='text'>
                    <h5>Hello</h5>
                    <h1>
                        <span className='intro'>I&#39;m</span>
                        <span className='name'>Olubisi David Anderson</span>
                    </h1>
                    <p>A Full-stack Web developer</p>
                    <div className='button-group'>
                        <Button text='Resume' bgColor='red' />
                        <Button text='Contact me' />
                    </div>
                </div>
                <div className='image'></div>

                <style jsx>
                    {`
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
        </Pagelayout>
    );
}
