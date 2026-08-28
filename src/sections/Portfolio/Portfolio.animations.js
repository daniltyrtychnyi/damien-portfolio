import createScrollTimeline from '@/modules/animations/utils/createScrollTimeline'

class PortfolioAnimations {
    selectors = {
        root: '[data-js-portfolio]',
        item: '[data-js-portfolio-item]',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)

        if (!this.rootElement) return

        this.itemElements = this.rootElement.querySelectorAll(this.selectors.item)
        this.animate()
    }

    animate() {
        const timeline = createScrollTimeline(this.rootElement)

        timeline.from(this.itemElements, {
            opacity: 0,
            duration: 1,
            stagger: 0.2,
        })
    }
}

export default PortfolioAnimations