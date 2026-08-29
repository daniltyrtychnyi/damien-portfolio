import { gsap } from '@/modules/animations/GSAP'

class PageHeroAnimations {
  selectors = {
    root: '[data-js-page-hero]',
    image: '[data-js-page-hero-image]',
    headerMain: '[data-js-page-hero-header-main]',
    metricItem: '[data-js-page-hero-metric-item]',
    scroll: '[data-js-page-hero-scroll]',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.imageElement = this.rootElement.querySelector(this.selectors.image)
    this.headerMainElement = this.rootElement.querySelector(
      this.selectors.headerMain,
    )
    this.metricItemElements = this.rootElement.querySelectorAll(
      this.selectors.metricItem,
    )
    this.scrollElement = this.rootElement.querySelector(this.selectors.scroll)
    this.animate()
  }

  animate() {
    const timeline = gsap.timeline()

    timeline
      .from(this.imageElement, {
        opacity: 0,
        duration: 1,
        delay: 0.2,
      })
      .from(
        this.headerMainElement,
        {
          x: -10,
          opacity: 0,
          duration: 1,
        },
        '<',
      )
      .from(
        this.scrollElement,
        {
          y: 20,
          opacity: 0,
          duration: 1,
        },
        '<',
      )

    this.metricItemElements.forEach((metricItem) => {
      timeline.from(
        metricItem,
        {
          opacity: 0,
          duration: 1,
        },
        '<0.15',
      )
    })
  }
}

export default PageHeroAnimations
