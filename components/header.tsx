import Link from 'next/link';
import Logo from '@components/logo';
import ThemeButton from './themeButton';

export default function Header() {
    const HeaderLink = [
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
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
            <ThemeButton />
            <style jsx>
                {`
                    .header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 20px 150px;
                        height: 60px;
                        width: 100%;
                        position: fixed;
                        z-index: 1;
                    }

                    .header a {
                        margin: 0px 20px;
                        font-family: 'Raleway', sans-serif;
                    }
                `}
            </style>
        </header>
    );
}
