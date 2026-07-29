const getPropsFromPolymorphicTag = (href, target, type) => {
    const isLink = href !== undefined

    return {
        Component: isLink ? 'a' : 'button',
        specificProps: isLink ? { href, target } : { type }
    }
}

export default getPropsFromPolymorphicTag