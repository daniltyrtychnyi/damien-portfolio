import './Feature.scss'
import Icon from '@/components/Icon'

export default (props) => {
    const {
        label,
    } = props

    return (
        <div className="feature">
            <Icon
                className="feature__icon"
                name="star-dark-30"
                hasFill
            />
            <p className="feature__label">
                {label}
            </p>
        </div>
    )
}