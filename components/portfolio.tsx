import Image from 'next/image';
import styles from '@styles/styles.module.css';
import Button from './button';
import portfolioArray from '@json/portfolio.json';

export default function Portfolio() {
    return (
        <section id='portfolios' className={styles.portfolios}>
            <h3>Portfolio</h3>
            {portfolioArray.map((item, index) => (
                <div key={index} className={`portfolio ${styles.portfolio}`}>
                    {item.image.laptop.length > 1 &&
                    item.image.mobile.length > 1 ? (
                        <div className='images'>
                            <Image
                                src={item.image.laptop}
                                alt={item.title}
                                className={styles.laptop}
                                height={300}
                                width={300}
                            />
                            <Image
                                src={item.image.mobile}
                                alt={item.title}
                                className={styles.mobile}
                                height={200}
                                width={100}
                            />
                        </div>
                    ) : (
                        ''
                    )}
                    <div className={styles.description}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className={styles.visit}>
                        <a target='_blank' rel='noreferrer' href={item.link}>
                            <Button bgColor='#009fff' text='Visit' />
                        </a>
                    </div>
                    <div className={styles.tech}>
                        <p className='tech_text'>Tech:</p>
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
            <style jsx>
                {`
                    .tech_text {
                        margin: 5px;
                        font: normal italic 13px/15px 'Raleway', sans-serif;
                    }
                    @media (max-width: 1024px) and (min-width: 768px) {
                        .images {
                            display: flex;
                            align-items: center;
                        }
                        .portfolio {
                            flex-direction: column;
                        }
                    }
                    @media (max-width: 500px) {
                        section#portfolios {
                            width: 100%;
                            margin: 0px;
                            padding: 0px;
                        }
                        .images {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            margin-top: -80px;
                            margin-bottom: 30px;
                        }
                    }
                `}
            </style>
        </section>
    );
}
