import Swiper from 'swiper'
import { Navigation, Keyboard, A11y } from 'swiper/modules'
import getConfig from '@/utils/getConfig'
import MatchMedia from '@/constants/MatchMedia'

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

    const { previousButton, nextButton } = this.getButtonsFromNavigation()

    this.init(previousButton, nextButton)

    if (this.config.navigationTargetElementId) {
      this.bindEvents()
    }
  }

  init(previousButton, nextButton) {
    this.swiper = new Swiper(this.swiperElement, {
      ...this.config.sliderConfig,
      modules: [Navigation, Keyboard, A11y],
      loop: true,
      navigation: {
        prevEl: previousButton,
        nextEl: nextButton,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      a11y: {
        prevSlideMessage: 'Previous Slide',
        nextSlideMessage: 'Next Slide',
      },
    })
  }

  getButtonsFromNavigation(isLaptopDevice = MatchMedia.laptop.matches) {
    const isNavigationOutside = Boolean(this.config.navigationTargetElementId)
    const isNavigationInternal = !isNavigationOutside || isLaptopDevice

    const navigationElement = isNavigationInternal
      ? this.rootElement.querySelector(this.selectors.navigation)
      : document.getElementById(this.config.navigationTargetElementId)

    const previousButton = navigationElement.querySelector(
      this.selectors.previousButton,
    )
    const nextButton = navigationElement.querySelector(
      this.selectors.nextButton,
    )

    return {
      previousButton,
      nextButton,
    }
  }

  updateSwiperNavigation(previousButton, nextButton) {
    this.swiper.navigation.destroy()

    this.swiper.params.navigation.prevEl = previousButton
    this.swiper.params.navigation.nextEl = nextButton

    this.swiper.navigation.init()
    this.swiper.navigation.update()
  }

  onLaptopMatchMediaChange = (event) => {
    const { previousButton, nextButton } = this.getButtonsFromNavigation(
      event.matches,
    )

    this.updateSwiperNavigation(previousButton, nextButton)
  }

  bindEvents() {
    MatchMedia.laptop.addEventListener('change', this.onLaptopMatchMediaChange)
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
