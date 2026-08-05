import './Action.scss'
import getPropsFromPolymorphicTag from "@/utils/getPropsFromPolymorphicTag"
import clsx from 'clsx'
import Icon from '../Icon'

export default (props) => {
    const {
        className,
        href,
        type,
        title,
        subTitle,
        /**
         * '' (default) | 'grey-50'
         */
        mode = '',
    } = props

    const { Component, specificProps } = getPropsFromPolymorphicTag(href, type)

    return (
        <Component
            className={clsx(className, 'action', {
                [`action--${mode}`]: mode,
            })}
            {...specificProps}
        >
            <span className="action__top">
                <span className="action__title">
                    {title}
                </span>
                <span className="action__icon-wrapper">
                    <Icon
                        className="action__icon"
                        name="arrow-top-right"
                    />
                </span>
            </span>
            {subTitle && (
                <span className="action__bottom">
                    <span className="action__title">
                        {subTitle}
                    </span>
                </span>
            )}
        </Component>
    )
}