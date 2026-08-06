import Section from '@/layouts/Section'
import PortfolioCard from '@/components/PortfolioCard'
import Slider from '@/components/Slider'
import portfolioItems from './portfolioItems'

const sliderId = 'portfolio-slider-navigation'

export default () => {
    return (
        <Section
            className="portfolio"
            titleId="portfolio-title"
            subTitle="Portfolio"
            title="Explore My photography work."
            sliderProps={{
                sliderId,
                laptopHidden: true,
            }}
            buttonProps={{
                label: "View All Works",
            }}
        >
            <Slider
                navigationTargetElementId={sliderId}
                sliderConfig={{
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 15,
                        },
                        1280: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 30,
                        },
                        1600: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 50,
                        }
                    }
                }}
                laptopVisible
            >
                {portfolioItems.map((portfolioItem, index) => (
                    <PortfolioCard
                        {...portfolioItem}
                        key={index}
                    />
                ))}
            </Slider>
        </Section>
    )
}