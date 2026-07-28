import './Footer.scss'

const Footer = () => {
    const menuItems = [
        {
          title: 'Home',
          links: ['About Me', 'My Works', 'Testimonials'],
        },
        {
            title: 'Clients',
            links: ['Klovesto', 'Nukeway', 'Cloven’s', 'MenVol'],
        },
        {
            title: 'Portfolio',
            links: ['Events', 'Portrait', 'Branding', 'Commerciale', 'Wedding'],
        },
        {
            title: 'Services',
            links: ['Portraits', 'Events', 'Commercial'],
        },
    ]

    return (
        <footer className="footer">
            <div className="footer__main container">
                <div className="footer__main-column">
                </div>
                <div className="footer__main-column">
                    <nav className="footer__menu">
                        {menuItems.map(({ title, links }, index) => (
                            <div className="footer__menu-column" key={index}>
                                <a className="footer__menu-title" href="/">
                                    {title}
                                </a>
                                {links?.length > 0 && (
                                    <ul className="footer__menu-list">
                                        {links.map((link, index) => (
                                            <li className="footer__menu-item" key={index}>
                                                <a className="footer__menu-link" href="/">
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="footer__extra"></div>
        </footer>
    )
}

export default Footer