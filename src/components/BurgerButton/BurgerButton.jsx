import './BurgerButton.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, extraAttrs = {} } = props

  const title = 'Open menu'

  return (
    <button
      className={clsx(className, 'burger-button')}
      type="button"
      title={title}
      aria-label={title}
      {...extraAttrs}
    >
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  )
}
