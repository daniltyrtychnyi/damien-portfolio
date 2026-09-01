import createScrollTimeline from '@/modules/animations/utils/createScrollTimeline'

class AboutAnimations {
  selectors = {
    root: '[data-js-about]',
    image: '[data-js-about-image]',
    body: '[data-js-about-body]',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.imageElement = this.rootElement.querySelector(this.selectors.image)
    this.bodyElement = this.rootElement.querySelector(this.selectors.body)
    this.animate()
  }

  animate() {
    const timeline = createScrollTimeline(this.rootElement)

    timeline
      .from(this.imageElement, {
        x: -10,
        opacity: 0,
        duration: 1,
      })
      .from(
        this.bodyElement,
        {
          x: 10,
          opacity: 0,
          duration: 1,
        },
        '<'
      )
  }
}

export default AboutAnimations
