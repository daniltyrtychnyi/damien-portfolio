import './TimeCard.scss'

export default (props) => {
  const { year, description } = props

  return (
    <div className="time-card">
      <h3 className="time-card__title">
        Year - <time dateTime={year}>{year}</time>
      </h3>
      <div className="time-card__description">
        <p>{description}</p>
      </div>
    </div>
  )
}
