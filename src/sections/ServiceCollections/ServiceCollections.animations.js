import createScrollTimeline from '@/modules/animations/utils/createScrollTimeline'

const rootSelector = '[data-js-service-collection]'

class ServiceCollectionsAnimations {
  selectors = {
    root: rootSelector,
    header: '[data-js-service-collection-header]',
    activeSlide: '.swiper-slide-active',
    item: '[data-js-service-collection-item]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement

    if (!this.rootElement) {
      return
    }

    this.headerElement = this.rootElement.querySelector(this.selectors.header)
    this.activeSlideElement = this.rootElement.querySelector(
      this.selectors.activeSlide
    )
    this.animate()
  }

  animate() {
    const timeline = createScrollTimeline(this.rootElement)

    timeline
      .from(this.headerElement, {
        x: -20,
        opacity: 0,
        duration: 1,
      })
      .from(
        this.activeSlideElement,
        {
          y: 10,
          opacity: 0,
          duration: 1,
        },
        '<'
      )
  }
}

class ServiceCollectionsAnimationsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new ServiceCollectionsAnimations(element)
    })
  }
}

export default ServiceCollectionsAnimationsCollection
