import Link from 'next/link';
import Logo from '@components/logo';
import ThemeButton from './themeButton';

export default function Header({ themeState }) {
    const HeaderLink = [
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolios' },
        { name: "Let's Talk", href: '#contact' },
    ];

    return (
        <header className='header'>
            <Logo />
            <nav className={`nav`}>
                {HeaderLink.map((link, index) => {
                    return (
                        <Link key={index} href={link.href} passHref>
                            <a>{link.name}</a>
                        </Link>
                    );
                })}
            </nav>
            <ThemeButton themeState={themeState} />
            <style jsx>
                {`
                    .header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 20px 120px;
                        height: 60px;
                        width: 100%;
                        position: fixed;
                        z-index: 1;
                    }

                    .header a {
                        margin: 0px 20px;
                        font-family: 'Raleway', sans-serif;
                    }

                    @media (max-width: 768px) {
                        header.header {
                            padding: 0px 20px;
                        }
                    }

                    @media (max-width: 500px) {
                        .header {
                            padding: 20px;
                        }
                        .header nav {
                            display: none;
                        }
                    }
                `}
            </style>
        </header>
    );
}
