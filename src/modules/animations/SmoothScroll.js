import Lenis from 'lenis'

class SmoothScroll {
  constructor() {
    this.init()
  }

  init() {
    this.lenis = new Lenis({
      autoRaf: false,
      duration: 1.5,
    })
  }
}

export default SmoothScroll
