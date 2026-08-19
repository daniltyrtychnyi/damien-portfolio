import './PortfolioHero.scss'
import PageHero from '@/components/PageHero'

export default () => {
    const partnersItems = [
        {
            imgSrc: '/src/assets/images/page-hero/portfolio/partners/1.svg',
            alt: 'Infinity Parker',
        },
        {
            imgSrc: '/src/assets/images/page-hero/portfolio/partners/2.svg',
            alt: 'Omega Million',
        },
        {
            imgSrc: '/src/assets/images/page-hero/portfolio/partners/3.svg',
            alt: 'WheelApp',
        },
        {
            imgSrc: '/src/assets/images/page-hero/portfolio/partners/4.svg',
            alt: 'High Country Club',
        },
        {
            imgSrc: '/src/assets/images/page-hero/portfolio/partners/5.svg',
            alt: 'EdgeKart',
        },
    ]

    return (
        <PageHero
            titleId="portfolio-title"
            subTitle="Portfolio"
            title="Visual Poetry in Pixels"
            mode="portfolio"
            description="Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens."
            desktopImageSrc="/src/assets/images/page-hero/portfolio/bg.png"
            laptopImageSrc="/src/assets/images/page-hero/portfolio/bg_laptop.jpg"
            hasDecor
            scrollTarget="The works"
        >
            <div className="portfolio-hero__partners">
                <h2 className="portfolio-hero__partners-title">
                    bRANDS i hAVE wORKED wITH
                </h2>
                <div className="portfolio-hero__partners-wrapper">
                    <ul className="portfolio-hero__partners-list container">
                        {partnersItems.map(({imgSrc, alt}, index) => (
                            <li className="portfolio-hero__partners-item" key={index}>
                                <img
                                    className="portfolio-hero__partners-logo"
                                    src={imgSrc}
                                    alt={alt}
                                    width={250}
                                    height={50}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </PageHero>
    )
}