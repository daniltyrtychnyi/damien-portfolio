import './Services.scss'
import Section from '@/layouts/Section'
import Action from '@/components/Action'
import { Picture } from 'minista/assets'
import FeatureGroup from '@/components/FeatureGroup'
import Slider from '@/components/Slider'
import servicesItems from './servicesItems'

export default () => {
  const sliderId = 'services-slider'

  return (
    <Section
      className="services"
      titleId="services-title"
      subTitle="Services"
      title="My Photography Services"
      sliderNavigationProps={{
        sliderId,
        isLaptopSHidden: true,
      }}
      buttonProps={{
        label: 'View All Services',
        href: '/services',
      }}
      extraAttrs={{
        'data-js-services': '',
      }}
    >
      <Slider
        navigationTargetElementId={sliderId}
        sliderConfig={{
          slidesPerView: 1,
          slidesPerGroup: 1,
          breakpoints: {
            1024: {
              allowTouchMove: false,
            },
            1441: {
              allowTouchMove: false,
            },
          },
        }}
        isLaptopSVisible
      >
        {servicesItems.map(
          ({ title, description, imgSrc, features }, index) => (
            <div className="services__wrapper" key={index}>
              <div className="services__main">
                <div className="services__info" data-js-services-info="">
                  <Action
                    className="services__action"
                    href="/"
                    title={title}
                    mode="grey-50"
                  />
                  <div className="services__description">
                    <p>{description}</p>
                  </div>
                </div>
                <div className="services__body">
                  <p className="services__label">Service Highlights</p>
                  <FeatureGroup
                    items={features}
                    extraAttrs={{
                      'data-js-services-feature': '',
                    }}
                  />
                </div>
              </div>
              <Picture
                className="services__image"
                src={imgSrc}
                loading="lazy"
                data-js-services-image=""
              />
            </div>
          )
        )}
      </Slider>
    </Section>
  )
}
