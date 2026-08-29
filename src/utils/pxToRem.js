const pxToRem = (pixels) => {
  const rootFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize,
  )

  return pixels / rootFontSize
}

export default pxToRem
