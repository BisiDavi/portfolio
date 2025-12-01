import Link from "next/link";

export default function Logo() {
    return (
        <div className="logo">
            <Link href="/" passHref>
                @<h3>O.D</h3>
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
                        margin: 0px 5px 0px 2px;
                    }
                    .logo a span {
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    );
}
