import Image from 'next/image';
import styles from '@styles/styles.module.css';

export default function Footer() {
    const icons = [
        'reactjs',
        'nextjs',
        'nodejs',
        'php',
        'graphql',
        'mongodb',
        'mysql',
        'wordpress',
        'git',
        'laravel',
        'typescript',
        'gatsby',
    ];
    return (
        <div className={`footer ${styles.footer}`}>
            <div className='icons'>
                {icons.map((icon, index) => (
                    <span className='icon' key={index}>
                        <Image
                            height={40}
                            width={40}
                            alt={icon}
                            src={`/${icon}.svg`}
                        />
                    </span>
                ))}
            </div>
            <style jsx>
                {`
                    .footer {
                        display: flex;
                        padding: 20px;
                        width: 100%;
                    }
                    .icons {
                        display: flex;
                        align-items: center;
                        margin: auto;
                    }
                    .icon {
                        margin: 0px 25px;
                    }

                    @media (max-width: 500px) {
                        .footer {
                            align-items: center;
                            justify-content: center;
                            display: flex;
                        }
                        .footer .icons {
                            display: grid;
                            grid-template-columns: repeat(3, 100px);
                            grid-gap: 10px;
                            grid-template-rows: 1fr 1fr 1fr;
                        }
                    }
                `}
            </style>
        </div>
    );
}
