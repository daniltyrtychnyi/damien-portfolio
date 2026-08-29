import './Accordion.scss'

export default (props) => {
  const { name, isOpen, id, title, children } = props

  return (
    <div className="accordion">
      <details className="accordion__details" name={name} open={isOpen}>
        <summary className="accordion__summary">
          <h3 className="accordion__title h6">
            <span aria-details={id} role="term">
              {title}
            </span>
          </h3>
          <span className="accordion__indicator">
            <svg>
              <path d="M18 9L12 15L6 9" stroke="#CACACE" strokeWidth="2" />
            </svg>
          </span>
        </summary>
      </details>
      <div className="accordion__content" id={id} role="definition">
        <div className="accordion__content-inner">
          <div className="accordion__content-body">{children}</div>
        </div>
      </div>
    </div>
  )
}
