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
                isLaptopSHidden: true,
            }}
            buttonProps={{
                label: 'View All Testimonials'
            }}
            extraInfo={{
                label: 'Total Reviews',
                value: '323',
            }}
            extraAttrs={{
                'data-js-reviews': '',
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
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 20,
                        },
                        1441: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 30,
                        },
                    },
                }}
                isLaptopSVisible
                extraAttrs={{
                    'data-js-reviews-item': '',
                }}
            >
                {reviewItems.map((reviewItem, index) => (
                    <ReviewCard {...reviewItem} key={index} />
                ))}
            </Slider>
        </Section>
    )
}