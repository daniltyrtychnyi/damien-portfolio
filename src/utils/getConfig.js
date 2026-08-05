import getAttrNameFromSelector from './getAttrNameFromSelector'

export default (element, dataAttrSelector) => {
    return JSON.parse(
        element.getAttribute(
            getAttrNameFromSelector(dataAttrSelector)
        )
    )
}