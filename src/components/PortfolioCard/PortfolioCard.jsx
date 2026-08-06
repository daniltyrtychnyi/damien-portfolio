import './PortfolioCard.scss'
import {Image} from 'minista/assets'
import Icon from '../Icon'

export default (props) => {
    const {
        className,
        imgSrc,
        title,
        date,
        dateTime,
    } = props
    return (
        <article className="portfolio-card">
            <Image
                className="portfolio-card__image"
                src={imgSrc}
                loading="lazy"
            />
            <div className="portfolio-card__body">
                <div className="portfolio-card__info">
                    <h3 className="portfolio-card__title h6">
                        {title}
                    </h3>
                    <time
                        className="portfolio-card__date"
                        dateTime={dateTime}
                    >
                        {date}
                    </time>
                </div>
                <a href="/" className="portfolio-card__link">
                    View Project
                    <Icon
                        className="portfolio-card__icon"
                        name="arrow-top-right"
                        hasFill
                    />
                </a>
            </div>
        </article>
    )
}