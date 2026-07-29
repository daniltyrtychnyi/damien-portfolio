import './Button.scss'
import clsx from 'clsx'
import Icon from '../Icon'

const Button = (props) => {
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
    } = props

    const isLink = href !== undefined
    const Component = isLink ? 'a' : 'button'
    const linkProps = {href, target}
    const buttonProps = {type}
    const specificProps = isLink ? linkProps : buttonProps
    const title = isLabelVisible ? label : undefined
    const iconComponent = iconName && (
        <Icon
            className="button__icon"
            name={iconName}
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

export default Button