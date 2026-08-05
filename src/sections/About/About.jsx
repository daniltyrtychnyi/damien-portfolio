import './About.scss'
import Section from '@/layouts/Section'
import Button from '@/components/Button'
import {Image} from 'minista/assets'
import Socials from '@/components/Socials'

export default () => {
    return (
        <Section
            className="about"
            titleId="about-title"
            subTitle="About"
            title="I am Damien"
            actions={
                <Button
                    className="about__button"
                    href="/"
                    label="Know More ->"
                />
            }
        >
            <div className="about__main">
                <Image
                    className="about__image"
                    src="/src/assets/images/about/1.png"
                    loading="lazy"
                />
                <div className="about__body">
                    <div className="about__introduction">
                        <h3 className="about__title h4">
                            Introduction
                        </h3>
                        <div className="about__description">
                            <p>
                                My journey as a photographer has been a lifelong quest to capture the extraordinary in
                                the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I
                                see it. Based in the enchanting landscapes of the USA, I find inspiration in every
                                corner of this diverse and vibrant country. Join me as we embark on a visual odyssey,
                                where each photograph tells a story, and every frame is a piece of my heart.
                            </p>
                        </div>
                    </div>
                    <div className="about__contacts">
                        <h3 className="about__title h4">
                            Contact Information
                        </h3>
                        <ul className="about__contacts-list">
                            <li className="about__contacts-item">
                                <span className="about__contacts-label">
                                    Email
                                </span>
                                <a href="mailto:damienbraun@gmail.com" className="about__contacts-link">
                                    damienbraun@gmail.com
                                </a>
                            </li>
                            <li className="about__contacts-item">
                                <span className="about__contacts-label">
                                    Phone Number
                                </span>
                                <a href="tel:+00000000000" className="about__contacts-link">
                                    +00 000000000
                                </a>
                            </li>
                        </ul>
                        <div className="about__extra">
                            <Socials className="about__soc1als"/>
                            <div className="about__actions">
                                <Button
                                    className="about__button"
                                    href="/"
                                    label="Let’s Work"
                                />
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