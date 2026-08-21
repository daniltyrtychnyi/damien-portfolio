import './ReviewCard.scss'
import Socials from '@/components/Socials'

export default (props) => {
    const {
        name,
        location,
        description,
        value,
    } = props

    return (
        <article className="review-card">
            <header className="review-card__header">
                <div className="review-card__author">
                    <h3 className="review-card__name h6">
                        {name}
                    </h3>
                    <span className="review-card__location">
                        {location}
                    </span>
                </div>
                <Socials
                    className="review-card__soc1als"
                    buttonMode="circle"
                />
            </header>
            <div
                className="review-card__stars"
                aria-label={`Rating ${value} out of 5`}
                style={{
                    '--ratingStarsValue': value,
                }}
            >
                <img
                    src="/rating/stars_unfilled.svg"
                    alt=""
                    className="review-card__stars-unfilled"
                    width={140}
                    height={24}
                    loading="lazy"
                />
                <img
                    src="/rating/stars_filled.svg"
                    alt=""
                    className="review-card__stars-filled"
                    width={140}
                    height={24}
                    loading="lazy"
                />
            </div>
            <div className="review-card__description">
                <p>
                    {description}
                </p>
            </div>
        </article>
    )
}