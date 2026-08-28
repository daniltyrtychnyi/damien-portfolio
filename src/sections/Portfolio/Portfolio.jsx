import Section from '@/layouts/Section'
import PortfolioCard from '@/components/PortfolioCard'
import Slider from '@/components/Slider'
import portfolioItems from './portfolioItems'

export default () => {
    const sliderId = 'portfolio-slider-navigation'

    return (
        <Section
            className="portfolio"
            titleId="portfolio-title"
            subTitle="Portfolio"
            title="Explore My photography work."
            sliderProps={{
                sliderId,
                isLaptopSHidden: true,
            }}
            buttonProps={{
                label: "View All Works",
            }}
            extraAttrs={{
                'data-js-portfolio': '',
            }}
        >
            <Slider
                navigationTargetElementId={sliderId}
                sliderConfig={{
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 15,
                            allowTouchMove: false,
                        },
                        1280: {
                            spaceBetween: 30,
                            allowTouchMove: false,
                        },
                        1441: {
                            spaceBetween: 50,
                            allowTouchMove: false,
                        },
                    },
                }}
                isLaptopSVisible
                extraAttrs={{
                    'data-js-portfolio-item': '',
                }}
            >
                {portfolioItems.map((portfolioItem, index) => (
                    <PortfolioCard {...portfolioItem} key={index} />
                ))}
            </Slider>
        </Section>
    )
}