import './Marquee.scss'
import clsx from 'clsx'
import MarqueeList from './components/MarqueeList'

const Marquee = (props) => {
    const {
        className,
    } = props

    const labels = [
        'Event Photography',
        'Commercial Photography',
        'Product Photography',
        'Wedding Photography',
        'Landscape Photography',
        'Branding Photography',
        'Portrait  Photography'
    ]

    return (
        <div className={clsx(className, 'marquee')}>
            <MarqueeList
                labels={labels}
            />
            <MarqueeList
                labels={labels}
                hidden
            />
        </div>
    )
}

export default Marquee