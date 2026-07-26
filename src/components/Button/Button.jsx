import './Button.scss'
import clsx from 'clsx'

const Button = (props) => {
    const {
        className,
        type = 'button',
        href,
        target,
        label,
        isLabelVisible = false,
    } = props

    const isLink = href !== undefined
    const Component = isLink ? 'a' : 'button'
    const linkProps = { href, target }
    const buttonProps = { type }
    const specificProps = isLink ? linkProps : buttonProps
    const title = isLabelVisible ? label : undefined

    return (
        <Component
            className={clsx(className, 'button')}
            {...specificProps}
            title={title}
            aria-label={title}
        >
            {!isLabelVisible && (
                <span className="button__label">
                    {label}
                </span>
            )}
        </Component>
    )
}

export default Button