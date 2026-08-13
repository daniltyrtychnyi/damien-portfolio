import './Brand.scss'
import Marquee from '@/components/Marquee'

export default () => {
    const titleId = 'brand-title'

    return (
        <section
            className="brand"
            aria-labelledby={titleId}
        >
            <h2 className="visually-hidden" id={titleId}>
                Damien Braun
            </h2>
            <div className="brand__image-wrapper container">
                <img
                    src='/src/assets/images/brand/1.svg'
                    alt=""
                    className="brand__image"
                    width={1058}
                    height={213}
                    loading="lazy"
                />
            </div>
            <Marquee
                className="brand__marquee"
            />
        </section>
    )
}