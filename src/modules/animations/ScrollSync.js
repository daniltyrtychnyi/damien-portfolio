import { gsap, ScrollTrigger } from './GSAP.js'

class ScrollSync {
  constructor(lenisInstance) {
    this.lenis = lenisInstance
    this.sync()
  }

  sync() {
    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    this.lenis.on('scroll', ScrollTrigger.update)
  }
}

export default ScrollSync
