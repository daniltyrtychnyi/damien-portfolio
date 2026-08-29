import createScrollTimeline from '@/modules/animations/utils/createScrollTimeline'

const rootSelector = '[data-js-portfolio-collection]'

class PortfolioCollectionsAnimations {
  selectors = {
    root: rootSelector,
    title: '[data-js-portfolio-collection-title]',
    actions: '[data-js-portfolio-collection-actions]',
    item: '[data-js-portfolio-collection-item]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement

    if (!this.rootElement) {
      return
    }

    this.titleElement = this.rootElement.querySelector(this.selectors.title)
    this.actionsElement = this.rootElement.querySelector(this.selectors.actions)
    this.itemElements = this.rootElement.querySelectorAll(this.selectors.item)
    this.animate()
  }

  animate() {
    const timeline = createScrollTimeline(this.rootElement)

    timeline
      .from(this.titleElement, {
        x: -30,
        opacity: 0,
        duration: 1,
      })
      .from(
        this.actionsElement,
        {
          x: 30,
          opacity: 0,
          duration: 1,
        },
        '<',
      )
      .from(
        this.itemElements,
        {
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        },
        '<',
      )
  }
}

class PortfolioCollectionsAnimationsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new PortfolioCollectionsAnimations(element)
    })
  }
}

export default PortfolioCollectionsAnimationsCollection
