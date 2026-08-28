import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.defaults({
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play reverse play reverse'
})

export { gsap, ScrollTrigger }