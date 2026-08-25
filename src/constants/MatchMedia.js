import pxToRem from '@/utils/pxToRem'

const MatchMedia = {
    laptop: window.matchMedia(`(width < ${pxToRem(1280)}rem)`),
}

export default MatchMedia