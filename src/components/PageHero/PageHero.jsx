import './PageHero.scss'
import {Picture} from 'minista/assets'
import clsx from 'clsx'

export default (props) => {
    const {
        titleId,
        subTitle,
        title,
        metrics = [],
        description,
        /**
         * '' (default) | 'portfolio' | 'services'
         */
        mode = '',
        desktopImageSrc,
        laptopImageSrc,
        scrollTarget = '',
        hasDecor,
        children,
    } = props

    return (
        <section
            className={clsx("page-hero", {
                [`page-hero--${mode}`]: mode,
            })}
            aria-labelledby={titleId}
        >
            <div className="page-hero__inner container">
                <div
                    className="page-hero__main"
                    style={{
                        '--pageHeroMainContent': hasDecor ? "''" : 'none',
                    }}
                >
                    <Picture
                        className="page-hero__image"
                        src={desktopImageSrc}
                        artDirectives={[
                            {
                                media: '(max-width: 1439.98px)',
                                src: laptopImageSrc,
                            },
                        ]}
                    />
                    <header className="page-hero__header">
                        <div className="page-hero__info">
                            <p className="page-hero__subtitle">
                                {subTitle}
                            </p>
                            <h1 className="page-hero__title" id={titleId}>
                                {title}
                            </h1>
                        </div>
                        {metrics?.length > 0 && (
                            <div className="page-hero__metrics">
                                <dl className="page-hero__metrics-list">
                                    {metrics.map(({label, value, unit}, index) => (
                                        <div className="page-hero__metrics-item" key={index}>
                                            <dt className="page-hero__metrics-key">
                                                {label}
                                            </dt>
                                            <dd className="page-hero__metrics-value h3">
                                                {value}{unit}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}
                        {description && (
                            <div className="page-hero__description">
                                <p>
                                    {description}
                                </p>
                            </div>
                        )}
                    </header>
                    <p className="page-hero__scroll hidden-laptop">
                        Scroll Down To See <br/>
                        {scrollTarget}
                    </p>
                </div>
            </div>
            {children}
        </section>
    )
}