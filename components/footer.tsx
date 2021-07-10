import Image from 'next/image';

export default function Footer() {
    const icons = [
        'reactjs',
        'nextjs',
        'nodejs',
        'php',
        'graphql',
        'mongodb',
        'postgresql',
        'wordpress',
        'git',
    ];
    return (
        <div className='footer'>
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
                    }
                    .icons {
                        display: flex;
                        align-items: center;
                        margin: auto;
                    }
                    .icon {
                        margin: 0px 25px;
                    }
                `}
            </style>
        </div>
    );
}
