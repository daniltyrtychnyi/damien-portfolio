import getPagePath from './getPagePath'

const getPropsFromPolymorphicTag = (href, target, type = 'button') => {
  const isLink = href !== undefined

  return {
    Component: isLink ? 'a' : 'button',
    specificProps: isLink ? { href: `${getPagePath(href)}`, target } : { type },
  }
}

export default getPropsFromPolymorphicTag
