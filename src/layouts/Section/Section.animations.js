import createScrollTimeline from '@/modules/animations/utils/createScrollTimeline'

const rootSelector = '[data-js-section]'

class SectionAnimations {
    selectors = {
        root: rootSelector,
        info: '[data-js-section-info]',
        extraInfo: '[data-js-section-extra]',
        actions: '[data-js-section-actions]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement

        if (!this.rootElement) return

        this.infoElement = this.rootElement.querySelector(this.selectors.info)
        this.extraInfoElement = this.rootElement.querySelector(this.selectors.extraInfo)
        this.actionsElement = this.rootElement.querySelector(this.selectors.actions)
        this.animate()
    }

    addTween(timeline, element, tweenOptions, position) {
        if (!element) return

        timeline.from(element, tweenOptions, position)
    }

    animate() {
        const timeline = createScrollTimeline(this.rootElement)

        this.addTween(timeline, this.infoElement, {x: -30, opacity: 0, duration: 1})
        this.addTween(timeline, this.extraInfoElement, {x: -30, opacity: 0, duration: 1}, '<')
        this.addTween(timeline, this.actionsElement, {x: 30, opacity: 0, duration: 1,}, '<')
    }
}

class SectionAnimationsCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new SectionAnimations(element)
        })
    }
}

export default SectionAnimationsCollection