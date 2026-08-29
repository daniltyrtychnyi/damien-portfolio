import './PageHero.scss'
import { Picture } from 'minista/assets'
import clsx from 'clsx'
import Socials from '@/components/Socials'

export default (props) => {
  const {
    titleId,
    subTitle,
    title,
    metrics = [],
    description,
    /**
     * '' (default) | 'portfolio' | 'services' | 'contact'
     */
    mode = '',
    desktopImageSrc,
    laptopImageSrc,
    mobileImageSrc,
    scrollTarget = '',
    hasDecor,
    hasSocials,
    children,
  } = props

  const responsiveSources = [
    mobileImageSrc && {
      media: '(max-width: 767.98px)',
      src: mobileImageSrc,
    },
    {
      media: '(max-width: 1439.98px)',
      src: laptopImageSrc,
    },
  ].filter((item) => item !== undefined)

  return (
    <section
      className={clsx('page-hero', {
        [`page-hero--${mode}`]: mode,
      })}
      aria-labelledby={titleId}
      data-js-page-hero=""
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
            artDirectives={responsiveSources}
            data-js-page-hero-image=""
          />
          {hasSocials && (
            <Socials className="page-hero__soc1als" buttonMode="circle-large" />
          )}
          <header className="page-hero__header">
            <div
              className="page-hero__header-main"
              data-js-page-hero-header-main=""
            >
              <div className="page-hero__info">
                <p className="page-hero__subtitle">{subTitle}</p>
                <h1 className="page-hero__title" id={titleId}>
                  {title}
                </h1>
              </div>
              {metrics?.length > 0 && (
                <div className="page-hero__metrics">
                  <dl className="page-hero__metrics-list">
                    {metrics.map(({ label, value, unit }, index) => (
                      <div
                        className="page-hero__metrics-item"
                        key={index}
                        data-js-page-hero-metric-item=""
                      >
                        <dt className="page-hero__metrics-key">{label}</dt>
                        <dd className="page-hero__metrics-value h3">
                          {value}
                          {unit}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              {description && (
                <div className="page-hero__description">
                  <p>{description}</p>
                </div>
              )}
            </div>
          </header>
          <p
            className="page-hero__scroll hidden-laptop"
            data-js-page-hero-scroll=""
          >
            {scrollTarget}
          </p>
        </div>
      </div>
      {children}
    </section>
  )
}
