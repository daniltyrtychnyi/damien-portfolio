import {gsap} from '@/modules/animations/GSAP'
import pxToRem from '@/utils/pxToRem'

class HomeHeroAnimations {
    selectors = {
        root: '[data-js-home-hero]',
        body: '[data-js-home-hero-body]',
        decor: '[data-js-home-hero-decor]',
        action: '[data-js-home-hero-action]',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)

        if (!this.rootElement) return

        this.bodyElement = this.rootElement.querySelector(this.selectors.body)
        this.decorElement = this.rootElement.querySelector(this.selectors.decor)
        this.actionElement = this.rootElement.querySelector(this.selectors.action)
        this.animate()
    }

    animate() {
        const timeline = gsap.timeline()

        timeline
            .from(this.rootElement, {
                scale: 1.3,
                filter: `blur(${pxToRem(8)}rem)`,
                duration: 1,
            })
            .from(this.decorElement, {
                scale: 0.4,
                duration: 1,
            }, '<0.2')
            .fromTo(this.bodyElement,
                {
                    y: 30,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                })
            .fromTo(this.actionElement,
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                }, '<0.2')
    }
}

export default HomeHeroAnimations