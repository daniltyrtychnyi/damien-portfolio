import createScrollTimeline from '@/modules/animations/utils/createScrollTimeline'

class JourneyAnimations {
  selectors = {
    root: '[data-js-journey]',
    item: '[data-js-journey-item]',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.itemElements = this.rootElement.querySelectorAll(this.selectors.item)
    this.animate()
  }

  animate() {
    const timeline = createScrollTimeline(this.rootElement)

    timeline.from(this.itemElements, {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
  }
}

export default JourneyAnimations
