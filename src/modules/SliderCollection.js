import getConfig from '@/utils/getConfig'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const rootSelector = '[data-js-slider]'

class Slider {
    selectors = {
        root: rootSelector,
        swiper: '[data-js-slider-swiper]',
        navigation: '[data-js-slider-navigation]',
        previousButton: '[data-js-slider-previous-button]',
        nextButton: '[data-js-slider-next-button]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.swiperElement = this.rootElement.querySelector(this.selectors.swiper)
        this.config = getConfig(this.rootElement, this.selectors.root)
        this.navigationElement = this.config.navigationTargetElementId
            ? document.getElementById(this.config.navigationTargetElementId)
            : this.rootElement.querySelector(this.selectors.navigation)
        this.previousButtonElement = this.navigationElement.querySelector(this.selectors.previousButton)
        this.nextButtonElement = this.navigationElement.querySelector(this.selectors.nextButton)
        this.init()
    }

    init() {
        new Swiper(this.swiperElement, {
            modules: [Navigation],
            loop: true,
            navigation: {
                prevEl: this.previousButtonElement,
                nextEl: this.nextButtonElement,
            }
        })
    }
}

class SliderCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Slider(element)
        })
    }
}

export default SliderCollection