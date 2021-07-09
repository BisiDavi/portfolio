export default function Logo() {
    return (
        <div className='logo'>
            <h3>
                <span>&#60;</span>O. David <span>/ &#62;</span>
            </h3>

            <style jsx>
                {`
                    .logo,
                    .logo h3 {
                        display: flex;
                        align-items: center;
                    }
                    .logo h3 {
                        color: white;
                    }
                    .logo h3 span {
                        color: black;
                    }
                `}
            </style>
        </div>
    );
}
