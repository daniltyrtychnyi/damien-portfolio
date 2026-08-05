import './Icon.scss'
import clsx from 'clsx'
import { Sprite } from 'minista/assets'

export default (props) => {
    const {
        className,
        name,
    } = props

    return (
        <span className={clsx(className, 'icon')}>
            <Sprite
                src={`/src/assets/icons/${name}.svg`}
            />
        </span>
    )
}