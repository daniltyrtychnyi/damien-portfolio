import './Action.scss'
import getPropsFromPolymorphicTag from '@/utils/getPropsFromPolymorphicTag'
import clsx from 'clsx'
import Icon from '../Icon'

export default (props) => {
  const {
    className,
    href,
    target,
    type,
    title,
    subTitle,
    /**
     * '' (default) | 'grey-50' | 'underline'
     */
    mode = '',
    extraAttrs,
  } = props

  const { Component, specificProps } = getPropsFromPolymorphicTag(
    href,
    target,
    type
  )

  return (
    <Component
      className={clsx(className, 'action', {
        [`action--${mode}`]: mode,
      })}
      {...specificProps}
      {...extraAttrs}
    >
      <span className="action__top">
        <span className="action__title">{title}</span>
        <span className="action__icon-wrapper">
          <Icon className="action__icon" name="arrow-top-right" hasFill />
        </span>
      </span>
      {subTitle && (
        <span className="action__bottom">
          <span className="action__title">{subTitle}</span>
        </span>
      )}
    </Component>
  )
}
