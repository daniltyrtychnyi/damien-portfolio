import { gsap }from '@/modules/animations/GSAP'

const createScrollTimeline = (element) => {
        return gsap.timeline({
            scrollTrigger: element,
        })
}

export default createScrollTimeline