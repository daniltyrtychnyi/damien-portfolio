import './SliderNavigation.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {
    const {
        id,
        laptopSHidden = false,
        laptopSVisible = false,
    } = props

    return (
        <div
            className={clsx("slider-navigation", {
                'hidden-laptop-s': laptopSHidden,
                'visible-laptop-s': laptopSVisible,
            })}
            id={id}
            data-js-slider-navigation=""
        >
            <Button
                className="slider-navigation__button slider-navigation__button--previous"
                label="Previous slide"
                isLabelVisible
                iconName="arrow-left"
                extraAttrs={{
                    'data-js-slider-previous-button': '',
                }}
            />
            <Button
                className="slider-navigation__button slider-navigation__button--next"
                label="Next slide"
                isLabelVisible
                iconName="arrow-right"
                extraAttrs={{
                    'data-js-slider-next-button': '',
                }}
            />
        </div>
    )
}