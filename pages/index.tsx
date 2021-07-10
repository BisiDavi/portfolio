import Pagelayout from '@layout/pagelayout';
import Button from '@components/button';

export default function Homepage() {
    return (
        <Pagelayout>
            <div className='homepage'>

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
