import './PortfolioCollections.scss'
import portfolioCollectionItems from './portfolioCollectionItems'
import getIdFromTitle from '@/utils/getIdFromTitle'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import Slider from '@/components/Slider'
import PortfolioCard from '@/components/PortfolioCard'

export default () => {
  return (
    <div className="portfolio-collections">
      {portfolioCollectionItems.map((portfolioCollectionItem, index) => {
        const titleId = `${getIdFromTitle(portfolioCollectionItem.title)}-title`
        const navigationTargetElementId = `${getIdFromTitle(portfolioCollectionItem.title)}-navigation`

        return (
          <section
            className="portfolio-collections__section container"
            aria-labelledby={titleId}
            key={index}
            data-js-portfolio-collection=""
          >
            <header className="portfolio-collections__header">
              <h2
                className="portfolio-collections__title h3"
                id={titleId}
                data-js-portfolio-collection-title=""
              >
                {portfolioCollectionItem.title}
              </h2>
              <SliderNavigation
                id={navigationTargetElementId}
                isLaptopSHidden
                extraAttrs={{
                  'data-js-portfolio-collection-actions': '',
                }}
              />
            </header>
            <div className="portfolio-collections__body">
              <Slider
                navigationTargetElementId={navigationTargetElementId}
                isLaptopSVisible
                sliderConfig={{
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  breakpoints: {
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 20,
                      allowTouchMove: false,
                    },
                    1280: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 40,
                      allowTouchMove: false,
                    },
                    1441: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 50,
                      allowTouchMove: false,
                    },
                  },
                }}
                extraAttrs={{
                  'data-js-portfolio-collection-item': '',
                }}
              >
                {portfolioCollectionItem.items.map(
                  (portfolioCardItem, index) => (
                    <PortfolioCard {...portfolioCardItem} key={index} />
                  )
                )}
              </Slider>
            </div>
          </section>
        )
      })}
    </div>
  )
}
