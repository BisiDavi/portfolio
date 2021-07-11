import Image from 'next/image';
import styles from '@styles/styles.module.css';
import Button from './button';

const portfolioArray = [
    {
        image: {
            laptop: '/cloudmall_macbook.webp',
            mobile: '/cloudmall_mobile.webp',
        },
        title: 'Cloudmall Africa',
        link: 'https://www.cloudmall.africa/',
        description:
            'A platform to purchase food, groceries, daily needs, raw food, books, dry pet food, wines, e.tc. at your convenience ',
        tech: ['nextjs', 'typescript', 'reactjs'],
    },
    {
        image: { laptop: 'jenjen_mobile.webp', mobile: '' },
        title: 'Jenjen&#39;s Luxury Wigs Store',
        link: 'https://www.jenjensluxury.com/',
        description:
            'An e-commerce platform where you can buy wigs at an affordable rate.',
        tech: ['nextjs', 'typescript', 'mongodb', 'reactjs'],
    },
    {
        image: { laptop: '', mobile: '' },
        title: 'Tega Portfolio',
        link: 'https://tegagames.com.ng/',
        description:
            'A portfolio site for a game developer, custom wordpress theme development',
        tech: ['wordpress', 'php'],
    },
    {
        image: { laptop: '', mobile: '' },
        title: 'The HMI ',
        link: 'https://the-hmi.herokuapp.com',
        description: 'An event place for wine, to associate, play games',
        tech: ['laravel', 'php'],
    },
];

export default function Portfolio() {
    return (
        <div id='portfolios' className={styles.portfolio}>
            <h3>Portfolio</h3>
            {portfolioArray.map((item, index) => (
                <div key={index} className='portfolio'>
                    <div className='images'>
                        <Image
                            src={item.image.laptop}
                            alt={item.title}
                            height={300}
                            width={300}
                        />
                        <Image
                            src={item.image.mobile}
                            alt={item.title}
                            height={150}
                            width={150}
                        />
                    </div>
                    <div className='description'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className='visit'>
                        <a href={item.link}>
                            <Button text='Visit' />
                        </a>
                    </div>
                    <div className='tech'>
                        {item.tech.map((image, index) => (
                            <Image
                                key={index}
                                src={`/${image}.svg`}
                                height={40}
                                width={40}
                                alt={image}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
