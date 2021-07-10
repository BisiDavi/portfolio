import Link from 'next/link';
import Logo from '@components/logo';
import ThemeButton from './themeButton';

export default function Header() {
    const HeaderLink = [
        { name: 'Services', href: '#service' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Pricing', href: '#pricing' },
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
                    }

                    .header a {
                        margin: 0px 20px;
                    }
                `}
            </style>
        </header>
    );
}
