import './Hero.scss'
import decorImage from '@/assets/images/hero/decor.svg'
import Action from '@/components/Action'
import bgImage from '@/assets/images/hero/hero-bg.png'
import Marquee from '@/components/Marquee'

const Hero = () => {
    const titleId = "hero-title"

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
                    className="hero__main-image hidden-laptop"
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
            <Marquee
                className="hero__marquee"
            />
            <div className="hero__image-wrapper container">
                <img
                    src={bgImage}
                    alt=""
                    className="hero__image"
                    width={1590}
                    height={512}
                />
            </div>
        </section>
    )
}

export default Hero