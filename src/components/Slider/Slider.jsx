import 'swiper/css'
import './Slider.scss'
import SliderNavigation from './components/SliderNavigation'

export default (props) => {
    const {
        children,
        navigationTargetElementId = null,
        sliderConfig = {},
        laptopHidden,
        laptopVisible,
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
            <SliderNavigation
                className="slider__navigation"
                laptopHidden={laptopHidden}
                laptopVisible={laptopVisible}
            />
        </div>
    )
}