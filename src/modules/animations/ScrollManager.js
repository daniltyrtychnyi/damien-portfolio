import SmoothScroll from './SmoothScroll'
import ScrollSync from './ScrollSync'

class ScrollManager {
    constructor() {
        this.init()
    }

    init() {
        this.smoothScroll = new SmoothScroll()
        new ScrollSync(this.smoothScroll.lenis)
    }
}

export default ScrollManager