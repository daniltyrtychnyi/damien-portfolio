import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
    const {
        className,
        loading = 'lazy',
    } = props

    const title = 'Home'

    return (
        <a
            className={clsx(className, 'logo')}
            href="/"
            title={title}
            aria-label={title}
        >
            <img
                className="logo__image"
                src="/logo.svg"
                alt=""
                width={134}
                height={27}
                loading={loading}
            />
        </a>
    )
}