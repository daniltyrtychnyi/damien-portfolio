import './Button.scss'
import clsx from 'clsx'
import Icon from '../Icon'
import getPropsFromPolymorphicTag from '@/utils/getPropsFromPolymorphicTag'

export default (props) => {
    const {
        className,
        type = 'button',
        href,
        target,
        /**
         * '' (default) | 'circle'
         */
        mode = '',
        label,
        isLabelVisible = false,
        iconName,
        /**
         * 'before' | 'after'
         */
        iconPosition = 'before',
        download,
        hasFill,
        extraAttrs,
    } = props

    const { Component, specificProps } = getPropsFromPolymorphicTag(href, target, type)
    const title = isLabelVisible ? label : undefined
    const iconComponent = iconName && (
        <Icon
            className="button__icon"
            name={iconName}
            hasFill={hasFill}
        />
    )

    return (
        <Component
            className={clsx(className, 'button', {
                [`button--${mode}`]: mode,
            })}
            {...specificProps}
            title={title}
            aria-label={title}
            download={download}
            {...extraAttrs}
        >
            {iconPosition === 'before' && iconComponent}
            {!isLabelVisible && (
                <span className="button__label">
                    {label}
                </span>
            )}
            {iconPosition === 'after' && iconComponent}
        </Component>
    )
}