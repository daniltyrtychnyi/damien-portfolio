import './FeatureGroup.scss'
import Feature from '@/components/Feature'

export default (props) => {
  const { items = [], extraAttrs } = props

  return (
    <div className="feature-group">
      <ul className="feature-group__list">
        {items.map((label, index) => (
          <li className="feature-group__item" key={index} {...extraAttrs}>
            <Feature label={label} />
          </li>
        ))}
      </ul>
    </div>
  )
}
