import './AccordionGroup.scss'
import clsx from 'clsx'

export default (props) => {
    const {
        columns = 1,
        children,
        extraAttrs,
    } = props

    const quantityItemsInColumn = Math.ceil(children.length / columns)

    return (
        <ul
            className={clsx("accordion-group", {
                [`accordion-group--${columns}-columns`]: columns > 1,
            })}
            {...extraAttrs}
        >
            {children.map((child, index) => (
                <li
                    className={clsx("accordion-group__item", {
                        'accordion-group__item--last-item-in-column':
                            columns > 1 && (index + 1) % quantityItemsInColumn === 0,
                    })}
                    key={index}
                >
                    {child}
                </li>
            ))}
        </ul>
    )
}