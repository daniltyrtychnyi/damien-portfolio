import './HomeHero.scss'
import decorImage from '@/assets/images/home-hero/decor.svg'
import Action from '@/components/Action'
import Marquee from '@/components/Marquee'
import {Picture} from 'minista/assets'

export default () => {
    const titleId = "home-hero-title"

    return (
        <section className="hero" aria-labelledby={titleId}>
            <div className="hero__main container">
                <div className="hero__body">
                    <p className="hero__subtitle">Stunning Photography by</p>
                    <h1 className="hero__title" id={titleId}>
                        Damien Braun
                    </h1>
                </div>
                <img
                    src={decorImage}
                    alt=""
                    className="hero__main-image hidden-laptop-s"
                    width={346}
                    height={346}
                />
                <Action
                    className="hero__action"
                    href="/"
                    title="Let’s"
                    subTitle="Work Together"
                />
            </div>
            <h2 className="visually-hidden">
                Shooting options
            </h2>
            <Marquee
                className="hero__marquee"
            />
            <div className="hero__image-wrapper container">
                <Picture
                    src="/src/assets/images/hero/hero-bg.png"
                    formats={['webp', 'avif', 'inherit']}
                />
            </div>
        </section>
    )
}