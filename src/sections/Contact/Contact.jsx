import './Contact.scss'
import UnderlineLink from '@/components/UnderlineLink'
import Field from '@/components/Field'
import Action from '@/components/Action'

export default () => {
    const titleId = 'contact-title'

    const contactItems = [
        { label: '+1-123-456-7890', href: 'tel:+11234567890'},
        { label: 'info@damienbraunphotography.com', href: 'mailto:info@damienbraunphotography.com' },
    ]

    const exampleEmail = 'example@example.com'

    return (
        <section
            className="contact container"
            aria-labelledby={titleId}
        >
            <h2 className="visually-hidden" id={titleId}>
                Contact
            </h2>
            <div className="contact__panel">
                <div className="contact__info">
                    <h3 className="contact__title">
                        Contact Information
                    </h3>
                    <div className="contact__description">
                        <p>
                            Feel free to reach out to us through various channels. We are available by phone, email, and
                            social media for your convenience.
                        </p>
                    </div>
                </div>
                <ul className="contact__list">
                    {contactItems.map(({label, href}, index) => (
                        <li
                            className="contact__item"
                            key={index}
                        >
                            <UnderlineLink
                                className="contact__link"
                                href={href}
                                mode="lower"
                                label={label}
                                hasArrow
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="contact__panel">
                <div className="contact__info">
                    <h3 className="contact__title">
                        Send Me a Message
                    </h3>
                    <div className="contact__description">
                        <p>
                            Have a specific inquiry or message for us? Please use the contact form below, and we'll get
                            back to you promptly.
                        </p>
                    </div>
                </div>
                <form className="contact__form" noValidate data-js-form="">
                    <div className="contact__form-body">
                        <Field
                            className="contact__form-cell"
                            label="First Name"
                            placeholder="Ivan"
                            isRequired
                            minLength={2}
                            maxLength={50}
                            autoComplete="given-name"
                        />
                        <Field
                            className="contact__form-cell"
                            label="Last Name"
                            placeholder="Ivanov"
                            autoComplete="family-name"
                        />
                        <Field
                            className="contact__form-cell"
                            type="email"
                            label="Email"
                            placeholder={exampleEmail}
                            inputMode="email"
                            isRequired
                            title={`Please enter a valid email address, e.g ${exampleEmail}`}
                            autoComplete="email"
                        />
                        <Field
                            className="contact__form-cell"
                            label="Phone Number"
                            placeholder="(999) 999-99-99"
                            inputMode="tel"
                            mask="+0 (000) 000-00-00"
                            autoComplete="tel"
                        />
                        <Field
                            className="contact__form-cell contact__form-cell--wide"
                            label="Your Message"
                            placeholder="Hello! I have a suggestion..."
                            type="textarea"
                            isRequired
                            minLength={10}
                            maxLength={15}
                            autoComplete="off"
                        />
                    </div>
                    <Action
                        className="contact__form-submit-button"
                        type="submit"
                        title="Send Message"
                        mode="underline"
                    />
                </form>
            </div>
        </section>
    )
}