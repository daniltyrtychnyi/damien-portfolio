import { gsap } from '@/modules/animations/GSAP'

class QuestionsAnimations {
    selectors = {
        root: '[data-js-questions]',
        group: '[data-js-questions-accordion-group]',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)

        if (!this.rootElement) return

        this.groupElement = this.rootElement.querySelector(this.selectors.group)
        this.animate()
    }

    animate() {
        gsap.from(this.groupElement, {
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: this.rootElement,
            }
        })
    }
}

export default QuestionsAnimations