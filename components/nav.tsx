import Link from 'next/link';
import { Logo } from '@components/.';

export default function Nav() {
    const navLink = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: "Let's Talk", href: '/contact' },
    ];

    return (
        <div className='nav'>
            <Logo />
            <div className='nav-links'>
                {navLink.map((link, index) => {
                    return (
                        <Link key={index} href={link.href} passHref>
                            <a>{link.name}</a>
                        </Link>
                    );
                })}
            </div>
            <style jsx>
                {`
                    .nav {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin: 20px 50px;
                    }

                    .nav a {
                        margin: 0px 20px;
                    }
                `}
            </style>
        </div>
    );
}
