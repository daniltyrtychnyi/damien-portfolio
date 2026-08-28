import './HomeHero.scss'
import imgDecor from '@/assets/images/home-hero/decor.svg'
import Action from '@/components/Action'
import Marquee from '@/components/Marquee'
import {Picture} from 'minista/assets'

export default () => {
    const titleId = "home-hero-title"

    return (
        <section className="hero" aria-labelledby={titleId} data-js-home-hero="">
            <div className="hero__main container">
                <div className="hero__body" data-js-home-hero-body="">
                    <p className="hero__subtitle">Stunning Photography by</p>
                    <h1 className="hero__title" id={titleId}>
                        Damien Braun
                    </h1>
                </div>
                <img
                    src={imgDecor}
                    alt=""
                    className="hero__main-image hidden-laptop-s"
                    width={346}
                    height={346}
                    data-js-home-hero-decor=""
                />
                <Action
                    className="hero__action"
                    href="/"
                    title="Let’s"
                    subTitle="Work Together"
                    extraAttrs={{
                        'data-js-home-hero-action': '',
                    }}
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
                    src="/src/assets/images/home-hero/hero-bg.png"
                    formats={['webp', 'avif', 'inherit']}
                />
            </div>
        </section>
    )
}
