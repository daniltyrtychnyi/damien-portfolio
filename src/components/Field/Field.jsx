import './Field.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import clsx from 'clsx'

export default (props) => {
    const {
        className,
        id = getIdFromTitle(props.label),
        /**
         * undefined (default) | 'email' | 'textarea'
         */
        type,
        label,
        placeholder,
        isRequired,
        inputMode,
        mask,
    } = props

    const Component = type === 'textarea'
        ? 'textarea'
        : 'input'

    const extraAttrs = {}

    if (mask) {
        extraAttrs['data-js-input-mask'] = mask
    }

    return (
        <div className={clsx(className, "field")}>
            <label htmlFor={id} className="field__label">
                {label} {isRequired && (
                    <span
                        className="field__required-star"
                        aria-hidden={true}
                    >
                        *
                    </span>
            )}
            </label>
            <Component
                id={id}
                className="field__control"
                type={type}
                placeholder={placeholder}
                required={isRequired}
                inputMode={inputMode}
                {...extraAttrs}
            />
        </div>
    )
}