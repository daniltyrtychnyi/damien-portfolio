import MatchMedia from '@/constants/MatchMedia'
import SmoothScroll from './SmoothScroll'
import ScrollSync from './ScrollSync'

class ScrollManager {
    constructor() {
        if (MatchMedia.reducedMotion.matches) return

        this.init()
    }

    init() {
        this.smoothScroll = new SmoothScroll()
        new ScrollSync(this.smoothScroll.lenis)
    }
}

export default ScrollManager