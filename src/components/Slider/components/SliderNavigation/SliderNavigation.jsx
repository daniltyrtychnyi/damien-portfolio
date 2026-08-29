import './SliderNavigation.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {
  const {
    id,
    /**
     * '' (default) | 'offset'
     */
    mode = '',
    isLaptopSHidden = false,
    isLaptopSVisible = false,
    extraAttrs,
  } = props

  return (
    <div
      className={clsx('slider-navigation', {
        'hidden-laptop-s': isLaptopSHidden,
        'visible-laptop-s': isLaptopSVisible,
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
      data-js-slider-navigation=""
      {...extraAttrs}
    >
      <Button
        className="slider-navigation__button slider-navigation__button--previous"
        isLabelVisible
        iconName="arrow-left"
        extraAttrs={{
          'data-js-slider-previous-button': '',
        }}
      />
      <Button
        className="slider-navigation__button slider-navigation__button--next"
        isLabelVisible
        iconName="arrow-right"
        extraAttrs={{
          'data-js-slider-next-button': '',
        }}
      />
    </div>
  )
}
