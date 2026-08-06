import './Section.scss'
import clsx from 'clsx'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import Button from '@/components/Button'

export default (props) => {
    const {
        className,
        titleId,
        subTitle,
        title,
        sliderProps = null,
        buttonProps = null,
        children,
    } = props

    return (
        <section
            className={clsx(className, 'section container')}
            aria-labelledby={titleId}
        >
            <header className="section__header">
                <div className="section__info">
                    <p className="section__subtitle">
                        {subTitle}
                    </p>
                    <h2 className="section__title" id={titleId}>
                        {title}
                    </h2>
                </div>
                {(sliderProps || buttonProps) && (
                    <div className="section__actions">
                        {sliderProps && (
                            <SliderNavigation
                                id={sliderProps.sliderId}
                                laptopHidden
                            />
                        )}
                        {buttonProps && (
                            <Button
                                className="section__button"
                                href="/"
                                label={buttonProps.label}
                                iconName="arrow-right-long"
                                iconPosition="after"
                                hasFill
                            />
                        )}
                    </div>
                )}
            </header>
            <div className="section__body">
                {children}
            </div>
        </section>
    )
}