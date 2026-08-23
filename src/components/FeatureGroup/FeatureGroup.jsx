import './FeatureGroup.scss'
import Feature from '@/components/Feature'

export default (props) => {
    const {
        items = [],
    } = props

    return (
        <div className="feature-group">
            <ul className="feature-group__list">
                {items.map((label, index) => (
                    <li className="feature-group__item" key={index}>
                        <Feature
                            label={label}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}