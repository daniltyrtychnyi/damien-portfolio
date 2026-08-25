class FormValidation {
    selectors = {
        root: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]',
    }

    errorMessages = {
        valueMissing: () => 'Please fill in this field.',
        typeMismatch: ({title}) => title || 'Please enter a valid value.',
        tooShort: ({ minLength, value }) => `Minimum characters - ${minLength}, Please entry more characters - ${minLength - value.length}.`,
        tooLong: ({maxLength}) => `Maximum characters - ${maxLength}.`,
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)

        if (!this.rootElement) return

        this.bindEvents()
    }

    manageErrors(fieldControlElement, errorMessages) {
        const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)

        fieldErrorsElement.innerHTML = errorMessages
            .map((errorMessage) => `
                <span class="field__error">${errorMessage}</span>
            `)
            .join('')
    }

    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity
        const errorMessages = []

        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
            if (errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldControlElement))
            }
        })

        this.manageErrors(fieldControlElement, errorMessages)

        const isValid = errorMessages.length === 0
        fieldControlElement.ariaInvalid = !isValid

        return isValid
    }

    onFocusOut = ({target}) => {
        const isRequired = target.required

        if (isRequired) {
            this.validateField(target)
        }
    }

    onSubmit = (event) => {
        const fieldControlElements = [...this.rootElement.elements].filter(({required}) => required)
        let isFormValid = true
        let firstInvalidFieldControlElement = null

        fieldControlElements.forEach((fieldControlElement) => {
            const isFieldValid = this.validateField(fieldControlElement)

            if (!isFieldValid) {
                isFormValid = false

                if (!firstInvalidFieldControlElement) {
                    firstInvalidFieldControlElement = fieldControlElement
                }
            }
        })

        if (!isFormValid) {
            event.preventDefault()
            firstInvalidFieldControlElement.focus()
        }
    }

    bindEvents() {
        this.rootElement.addEventListener('focusout', this.onFocusOut)
        this.rootElement.addEventListener('submit', this.onSubmit)
    }
}

export default FormValidation