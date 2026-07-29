import './Section.scss'
import clsx from 'clsx'

const Section = (props) => {
    const {
        className,
        titleId,
        subTitle,
        title,
        actions,
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
                {actions && (
                    <div className="section__actions"></div>
                )}
            </header>
            <div className="section__body">
                {children}
            </div>
        </section>
    )
}

export default Section