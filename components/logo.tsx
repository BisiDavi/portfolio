import Link from 'next/link';

export default function Logo() {
    return (
        <div className='logo'>
            <Link href='/' passHref>
                <a>
                    <span>&#60;</span> <h3>O. David </h3> <span> / &#62;</span>
                </a>
            </Link>
            <style jsx>
                {`
                    .logo,
                    .logo a {
                        display: flex;
                        align-items: center;
                    }
                    .logo a {
                        cursor: pointer;
                    }
                    .logo h3 {
                        margin: 0px 10px;
                    }
                    .logo a span {
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    );
}
