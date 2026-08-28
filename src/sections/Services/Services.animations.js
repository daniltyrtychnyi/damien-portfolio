import createScrollTimeline from '@/modules/animations/utils/createScrollTimeline'

class ServicesAnimations {
    selectors = {
        root: '[data-js-services]',
        activeSlide: '.swiper-slide-active',
        info: '[data-js-services-info]',
        feature: '[data-js-services-feature]',
        image: '[data-js-services-image]',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)

        if (!this.rootElement) return

        this.activeSlideElement = this.rootElement.querySelector(this.selectors.activeSlide)
        this.infoElement = this.activeSlideElement.querySelector(this.selectors.info)
        this.featureElements = this.activeSlideElement.querySelectorAll(this.selectors.feature)
        this.imageElement = this.activeSlideElement.querySelector(this.selectors.image)
        this.animate()
    }

    animate() {
        const timeline = createScrollTimeline(this.rootElement)

        timeline
            .from(this.infoElement, {
                y: 30,
                duration: 1,
            })
            .from(this.imageElement, {
                y: 40,
                duration: 1,
            }, '<')
            .from(this.featureElements, {
                y: 25,
                duration: 0.5,
                stagger: 0.2,
            }, '<0.2')
    }
}

export default ServicesAnimations