import './Socials.scss'
import clsx from 'clsx'
import Button from '../Button'

export default (props) => {
    const {
        className,
    } = props

    const socialsLinks = [
        {
            label: 'Facebook',
            iconName: 'facebook',
        },
        {
            label: 'Twitter',
            iconName: 'twitter',
        },
        {
            label: 'LinkedIn',
            iconName: 'linked-in',
        },
    ]

    return (
        <div className={clsx(className, 'soc1als')}>
            <ul className="soc1als__list">
                {socialsLinks.map(({ label, iconName }, index) => (
                    <li className="soc1als__item" key={index}>
                        <Button
                            className="soc1als__link"
                            href="/"
                            target="_blank"
                            mode="circle"
                            label={label}
                            isLabelVisible
                            iconName={iconName}
                            hasFill
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}