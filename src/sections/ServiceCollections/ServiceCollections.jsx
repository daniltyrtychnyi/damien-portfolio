import './ServiceCollections.scss'
import serviceCollectionItems from './serviceCollectionItems'
import getIdFromTitle from '@/utils/getIdFromTitle'
import UnderlineLink from '@/components/UnderlineLink'
import Slider from '@/components/Slider'
import { Picture } from 'minista/assets'
import FeatureGroup from '@/components/FeatureGroup'
import clsx from 'clsx'

export default () => {
  return (
    <div className="service-collections">
      {serviceCollectionItems.map(
        ({ title, description, images, services }, index) => {
          const titleId = `${getIdFromTitle(title)}-title`

          return (
            <section
              className="service-collections__section container"
              aria-labelledby={titleId}
              key={index}
              data-js-service-collection=""
            >
              <header className="service-collections__header">
                <div
                  className="service-collections__info"
                  data-js-service-collection-header=""
                >
                  <h2 className="service-collections__title h3" id={titleId}>
                    {title}
                  </h2>
                  <div className="service-collections__description">
                    <p>{description}</p>
                  </div>
                  <UnderlineLink
                    className="service-collections__link"
                    label="View Projects"
                    hasArrow
                  />
                </div>
                <Slider
                  navigationMode="offset"
                  extraAttrs={{
                    'data-js-service-collection-item': '',
                  }}
                >
                  {images.map(({ desktopImgSrc, mobileImgSrc, alt }, index) => (
                    <Picture
                      src={desktopImgSrc}
                      className="service-collections__image"
                      alt={alt}
                      loading="lazy"
                      key={index}
                      artDirectives={[
                        {
                          media: '(max-width: 480px)',
                          src: mobileImgSrc,
                        },
                      ]}
                    />
                  ))}
                </Slider>
              </header>
              <div className="service-collections__body">
                {services.map(({ title, price, mode, features }, index) => (
                  <div className="service-collections__service" key={index}>
                    <div className="service-collections__service-offer">
                      <h3 className="service-collections__service-title h5">
                        {title}
                      </h3>
                      <div className="service-collections__service-pricing">
                        <span
                          className={clsx(
                            'service-collections__service-price',
                            {
                              [`service-collections__service-price--${mode}`]:
                                mode,
                            },
                          )}
                        >
                          {price}
                        </span>
                        <UnderlineLink
                          className="service-collections__service-link"
                          label="Book a Call"
                          hasArrow
                        />
                      </div>
                    </div>
                    <FeatureGroup items={features} />
                  </div>
                ))}
              </div>
            </section>
          )
        },
      )}
    </div>
  )
}
