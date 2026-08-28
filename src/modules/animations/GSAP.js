import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.defaults({
    markers: import.meta.env.DEV,
    start: 'top center',
    end: 'bottom center',
})

export { gsap, ScrollTrigger }