import './About.scss'
import Section from '@/layouts/Section'
import { Picture } from 'minista/assets'
import Socials from '@/components/Socials'
import Button from '@/components/Button'

export default () => {
  return (
    <Section
      className="about"
      titleId="about-title"
      subTitle="About"
      title="I am Damien"
      buttonProps={{
        label: 'Know More',
      }}
    >
      <div className="about__main" data-js-about="">
        <div className="about__image">
          <Picture
            src="/src/assets/images/about/1.png"
            formats={['webp', 'avif', 'inherit']}
            loading="lazy"
            data-js-about-image=""
          />
        </div>
        <div className="about__body" data-js-about-body="">
          <div className="about__introduction">
            <h3 className="about__title h4">Introduction</h3>
            <div className="about__description">
              <p>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>
          </div>
          <div className="about__contacts">
            <h3 className="about__title h4">Contact Information</h3>
            <ul className="about__contacts-list">
              <li className="about__contacts-item">
                <span className="about__contacts-label">Email</span>
                <a
                  href="mailto:damienbraun@gmail.com"
                  className="about__contacts-link"
                >
                  damienbraun@gmail.com
                </a>
              </li>
              <li className="about__contacts-item">
                <span className="about__contacts-label">Phone Number</span>
                <a href="tel:+00000000000" className="about__contacts-link">
                  +00 000000000
                </a>
              </li>
            </ul>
            <div className="about__extra">
              <Socials
                className="about__soc1als"
                mode="big-column-gap"
                buttonMode="circle"
              />
              <div className="about__actions">
                <Button className="about__button" href="/" label="Let’s Work" />
                <Button
                  className="about__button"
                  href="/src/assets/icons/star.svg"
                  label="Download CV"
                  download
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
