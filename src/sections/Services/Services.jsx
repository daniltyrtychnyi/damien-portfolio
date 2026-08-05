import './Services.scss'
import Section from '@/layouts/Section'
import Button from '@/components/Button'
import Action from '@/components/Action'
import {Image} from 'minista/assets'
import Icon from "../../components/Icon/index.js";

const items = [
    'Coverage for weddings, parties, corporate functions, and more.',
    'Skilled photographers who know how to seize the moment.',
    'A mix of candid and posed shots for a comprehensive story.',
    'Quick turnaround for you to relive the day\'s highlights.',
]

export default () => {
    return (
        <Section
            className="services"
            titleId="services-title"
            subTitle="Services"
            title="My Photography Services"
            actions={
                <Button
                    className="services__button"
                    href="/"
                    label="View All Services ->"
                />
            }
        >
            <div className="services__wrapper">
                <div className="services__main">
                    <div className="services__info">
                        <Action
                            className="services__action"
                            href="/"
                            title="Events"
                            mode="grey-50"
                        />
                        <div className="services__description">
                            <p>
                                Our event photography service is dedicated to capturing the magic of your special
                                occasions.
                                Whether it's a wedding, corporate event, or milestone celebration, we're there to
                                document
                                every heartfelt moment. We blend into the background, ensuring natural and candid shots
                                that
                                reflect the emotions of the day.
                            </p>
                        </div>
                    </div>
                    <div className="services__body">
                        <p className="services__label">
                            Service Highlights
                        </p>
                        <ul className="services__list">
                            {items.map((item, index) => (
                                <li className="services__item" key={index}>
                                    <Icon
                                        className="services__icon"
                                        name="star-dark-30"
                                    />
                                    <p className="services__features">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Image
                    className="services__image"
                    src="/src/assets/images/services/1.jpg"
                    loading="lazy"
                />
            </div>
        </Section>
    )
}