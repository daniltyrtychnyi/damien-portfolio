import IMask from 'imask'
import getAttrNameFromSelector from '@/utils/getAttrNameFromSelector'

const rootSelector = '[data-js-input-mask]'

class InputMask {
    selectors = {
        root: rootSelector,
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.init()
    }

    init() {
        const mask = this.rootElement.getAttribute(
            getAttrNameFromSelector(rootSelector)
        )

        IMask(this.rootElement, { mask })
    }
}

class InputMaskCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new InputMask(element)
        })
    }
}

export default InputMaskCollection