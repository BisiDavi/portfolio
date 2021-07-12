import Logo from './logo';

export default function Loading() {
    return (
        <>
            <div className='loading'>
                <div className='circle'>
                    <span>&#60;</span> <h3>Loading </h3> <span> / &#62;</span>
                </div>
            </div>
            <style jsx>
                {`
                    .loading {
                        height: 100%;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        margin: auto;
                        align-items: center;
                        background-color: rgb(37 36 36 / 35%);
                        position: fixed;
                        z-index: 1000;
                    }
                    .circle {
                        display: flex;
                        border-radius: 50%;
                        height: 150px;
                        width: 150px;
                        background-color: white;
                        justify-content: center;
                        align-items: center;
                        animation: rotation 3s infinite linear;
                    }
                    @keyframes rotation {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(359deg);
                        }
                    }
                `}
            </style>
        </>
    );
}
