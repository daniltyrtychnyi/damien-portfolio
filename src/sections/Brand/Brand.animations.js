import { gsap } from '@/modules/animations/GSAP'

class BrandAnimations {
    selectors = {
        root: '[data-js-brand]',
        image: '[data-js-brand-image]',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)

        if (!this.rootElement) return

        this.imageElement = this.rootElement.querySelector(this.selectors.image)
        this.animate()
    }

    animate() {
        gsap.from(this.imageElement, {
            x: -70,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: this.rootElement,
            }
        })
    }
}

export default BrandAnimations