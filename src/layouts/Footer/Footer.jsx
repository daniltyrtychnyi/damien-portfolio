import './Footer.scss'
import Socials from '@/components/Socials'
import Action from '@/components/Action'
import UnderlineLink from '@/components/UnderlineLink'
import getPagePath from '@/utils/getPagePath'

export default () => {
  const menuItems = [
    {
      title: 'Home',
      href: '/',
      links: ['About Me', 'My Works', 'Testimonials'],
    },
    {
      title: 'Clients',
      href: '/',
      links: ['Klovesto', 'Nukeway', 'Cloven’s', 'MenVol'],
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
      links: ['Events', 'Portrait', 'Branding', 'Commerciale', 'Wedding'],
    },
    {
      title: 'Services',
      href: '/services',
      links: ['Portraits', 'Events', 'Commercial'],
    },
  ]

  const extraLinks = ['Terms & Conditions', 'Privacy Policy']

  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__main-column">
          <p className="footer__subtitle">
            A more meaningful home for photography
          </p>
          <Action
            className="footer__action"
            href="/contact"
            title="Let’s"
            subTitle="Work Together"
          />
        </div>
        <div className="footer__main-column">
          <nav className="footer__menu">
            {menuItems.map(({ title, href, links }, index) => (
              <div className="footer__menu-column" key={index}>
                <a className="footer__menu-title" href={getPagePath(href)}>
                  {title}
                </a>
                {links?.length > 0 && (
                  <ul className="footer__menu-list">
                    {links.map((link, index) => (
                      <li className="footer__menu-item" key={index}>
                        <UnderlineLink
                          className="footer__menu-link"
                          label={link}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className="footer__extra">
        <div className="footer__extra-inner container">
          <ul className="footer__extra-list">
            {extraLinks.map((link, index) => (
              <li className="footer__extra-item" key={index}>
                <a href={getPagePath('/')} className="footer__extra-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <Socials className="footer__soc1als" buttonMode="circle" />
          <p className="footer__copyright">
            &copy; <time dateTime="2024">2024</time> Damien Braun Photography.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
