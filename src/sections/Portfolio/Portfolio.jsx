import Section from '@/layouts/Section'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import Button from '@/components/Button'
import PortfolioCard from '@/components/PortfolioCard'
import Slider from '@/components/Slider'

const sliderId = 'portfolio-slider-navigation'

const portfolioSlides = [
    {
        imgSrc: '/src/assets/images/portfolio/1.jpg',
        title: 'Faces of Resilience',
        date: 'March 2022',
        dateTime: '2022-03',
    },
    {
        imgSrc: '/src/assets/images/portfolio/2.jpg',
        title: 'A Wedding Tale',
        date: 'January 2020',
        dateTime: '2022-01',
    },
    {
        imgSrc: '/src/assets/images/portfolio/3.jpg',
        title: 'Product Elegance',
        date: 'January 2020',
        dateTime: '2022-01',
    },
    {
        imgSrc: '/src/assets/images/portfolio/1.jpg',
        title: 'Faces of Resilience',
        date: 'March 2022',
        dateTime: '2022-03',
    },
    {
        imgSrc: '/src/assets/images/portfolio/2.jpg',
        title: 'A Wedding Tale',
        date: 'January 2020',
        dateTime: '2022-01',
    },
    {
        imgSrc: '/src/assets/images/portfolio/3.jpg',
        title: 'Product Elegance',
        date: 'January 2020',
        dateTime: '2022-01',
    },
    {
        imgSrc: '/src/assets/images/portfolio/1.jpg',
        title: 'Faces of Resilience',
        date: 'March 2022',
        dateTime: '2022-03',
    },
    {
        imgSrc: '/src/assets/images/portfolio/2.jpg',
        title: 'A Wedding Tale',
        date: 'January 2020',
        dateTime: '2022-01',
    },
    {
        imgSrc: '/src/assets/images/portfolio/3.jpg',
        title: 'Product Elegance',
        date: 'January 2020',
        dateTime: '2022-01',
    },
]
export default () => {
    return (
        <Section
            className="portfolio"
            titleId="portfolio-title"
            subTitle="Portfolio"
            title="Explore My photography work."
            actions={
                <>
                    <SliderNavigation
                        id={sliderId}
                        laptopHidden
                    />
                    <Button
                        className="portfolio__button"
                        href="/"
                        label="View All Works"
                        iconName="arrow-right-long"
                        iconPosition="after"
                        hasFill
                    />
                </>
            }
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
                {portfolioSlides.map((portfolioSlide, index) => (
                    <PortfolioCard
                        {...portfolioSlide}
                        key={index}
                    />
                ))}
            </Slider>
        </Section>
    )
}