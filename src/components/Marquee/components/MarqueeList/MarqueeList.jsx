import Icon from '@/components/Icon'

export default (props) => {
  const { hidden = false, labels = [] } = props

  return (
    <ul aria-hidden={hidden ? true : undefined} className="marquee__list">
      {labels.map((label, index) => (
        <li className="marquee__item" key={index}>
          <div className="marquee__card">
            <Icon className="marquee__icon" name="star" hasFill />
            <p className="marquee__label">{label}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
