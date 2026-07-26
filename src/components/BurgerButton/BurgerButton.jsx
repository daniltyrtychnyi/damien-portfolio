import './BurgerButton.scss'
import clsx from 'clsx'

const BurgerButton = (props) => {
    const {
        className,
    } = props

    const title = 'Open menu'

    return (
        <button
            className={clsx(className, 'burger-button')}
            type="button"
            title={title}
            aria-label={title}
        >
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
        </button>
    )
}

export default BurgerButton