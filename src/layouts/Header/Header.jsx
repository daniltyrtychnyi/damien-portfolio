import './Header.scss'
import Logo from '@/components/Logo'
import clsx from 'clsx'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'

const Header = (props) => {
    const {
        url,
    } = props

    const menuItems = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'About Me',
            href: '/about',
        },
        {
            label: 'Portfolio',
            href: '/portfolio',
        },
        {
            label: 'Services',
            href: '/services',
        },
    ]

    return (
        <header className="header">
            <div className="header__inner container">
                <Logo
                    className="header__logo"
                    loading="eager"
                />
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        {menuItems.map(({ label, href }, index) => (
                            <li
                                className="header__menu-item"
                                key={index}
                            >
                                <a
                                    className={clsx('header__menu-link', {
                                        'is-active': href === url,
                                    })}
                                    href={href}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button
                    className="header__button"
                    href="/contact"
                    label="Contact Me"
                />
                <BurgerButton
                    className="header__burger-button visible-tablet"
                />
            </div>
        </header>
    )
}

export default Header