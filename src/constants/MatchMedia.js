import pxToRem from '@/utils/pxToRem'

const MatchMedia = {
  laptop: window.matchMedia(`(width < ${pxToRem(1280)}rem)`),
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
}

export default MatchMedia
