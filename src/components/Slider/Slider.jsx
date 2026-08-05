import 'swiper/css'

const defaultSliderConfig = {
    slidesPerView: 1,
    slidesPerGroup: 1,
}

export default (props) => {
    const {
        children,
        navigationTargetElementId = null,
        sliderConfig = defaultSliderConfig,
    } = props

    return (
        <div
            className="slider"
            data-js-slider={JSON.stringify({
                navigationTargetElementId,
                sliderConfig,
            })}
        >
            <div
                className="slider__swiper swiper"
                data-js-slider-swiper=""
            >
                <ul className="slider__list swiper-wrapper">
                    {children.map((slide, index) => (
                        <li className="slider__item swiper-slide" key={index}>
                            {slide}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}