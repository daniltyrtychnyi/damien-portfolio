import './Section.scss'
import clsx from 'clsx'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import Button from '@/components/Button'

export default (props) => {
  const {
    className,
    /**
     * '' (default) | 'compact'
     */
    mode,
    titleId,
    subTitle,
    title,
    sliderNavigationProps = null,
    buttonProps = null,
    extraInfo = null,
    children,
    extraAttrs,
  } = props

  return (
    <section
      className={clsx(className, 'section container', {
        [`section--${mode}`]: mode,
      })}
      aria-labelledby={titleId}
      data-js-section=""
      {...extraAttrs}
    >
      <header className="section__header">
        <div className="section__main">
          <div className="section__info" data-js-section-info="">
            <p className="section__subtitle">{subTitle}</p>
            <h2 className="section__title" id={titleId}>
              {title}
            </h2>
          </div>
          {extraInfo && (
            <div className="section__extra" data-js-section-extra="">
              <p className="section__label">{extraInfo.label}</p>
              <span className="section__value">{extraInfo.value}</span>
            </div>
          )}
        </div>
        {(sliderNavigationProps || buttonProps) && (
          <div className="section__actions" data-js-section-actions="">
            {sliderNavigationProps && (
              <SliderNavigation
                id={sliderNavigationProps.sliderId}
                isLaptopSHidden
              />
            )}
            {buttonProps && (
              <Button
                className="section__button"
                href={buttonProps.href}
                label={buttonProps.label}
                iconName="arrow-right-long"
                iconPosition="after"
                hasFill
              />
            )}
          </div>
        )}
      </header>
      <div className="section__body" data-js-section-body="">
        {children}
      </div>
    </section>
  )
}
