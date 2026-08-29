import './PortfolioCard.scss'
import { Picture } from 'minista/assets'
import UnderlineLink from '../UnderlineLink'

export default (props) => {
  const { imgSrc, title, date, dateTime } = props

  return (
    <article className="portfolio-card">
      <Picture className="portfolio-card__image" src={imgSrc} loading="lazy" />
      <div className="portfolio-card__body">
        <div className="portfolio-card__info">
          <h3 className="portfolio-card__title h6">{title}</h3>
          <time className="portfolio-card__date" dateTime={dateTime}>
            {date}
          </time>
        </div>
        <UnderlineLink
          className="portfolio-card__link"
          label="View Project"
          hasArrow
        />
      </div>
    </article>
  )
}
