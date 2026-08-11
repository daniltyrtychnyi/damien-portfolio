import Section from '@/layouts/Section'
import Slider from '@/components/Slider'
import ReviewCard from '@/components/ReviewCard'
import reviewItems from './reviewItems'

export default () => {
    const sliderId = 'reviews-navigation-slider'

    return (
        <Section
            className="reviews"
            titleId="reviews-title"
            subTitle="Testimonials"
            title="What My Clients Say"
            sliderProps={{
                sliderId,
                laptopHidden: true,
            }}
            buttonProps={{
                label: 'View All Testimonials'
            }}
            extraInfo
        >
            <Slider
                navigationTargetElementId={sliderId}
                sliderConfig={{
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: true,
                    breakpoints: {
                        390: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                        },
                        1920: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 30,
                        },
                    },
                }}
                laptopVisible
            >
                {reviewItems.map((reviewItem, index) => (
                    <ReviewCard
                        {...reviewItem}
                        key={index}
                    />
                ))}
            </Slider>
        </Section>
    )
}