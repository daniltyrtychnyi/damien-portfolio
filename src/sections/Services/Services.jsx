import './Services.scss'
import Section from '@/layouts/Section'
import Action from '@/components/Action'
import {Picture} from 'minista/assets'
import Icon from '@/components/Icon'
import Slider from '@/components/Slider'
import servicesItems from './servicesItems'

export default () => {
    const sliderId = 'services-slider'

    return (
        <Section
            className="services"
            titleId="services-title"
            subTitle="Services"
            title="My Photography Services"
            sliderProps={{
                sliderId,
                laptopSHidden: true,
            }}
            buttonProps={{
                label: "View All Services",
            }}
        >
            <Slider
                navigationTargetElementId={sliderId}
                laptopSVisible
            >
                {servicesItems.map(({title, description, imgSrc, features}, index) => (
                    <div className="services__wrapper" key={index}>
                        <div className="services__main">
                            <div className="services__info">
                                <Action
                                    className="services__action"
                                    href="/"
                                    title={title}
                                    mode="grey-50"
                                />
                                <div className="services__description">
                                    <p>
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <div className="services__body">
                                <p className="services__label">
                                    Service Highlights
                                </p>
                                <ul className="services__list">
                                    {features.map((feature, index) => (
                                        <li className="services__item" key={index}>
                                            <Icon
                                                className="services__icon"
                                                name="star-dark-30"
                                                hasFill
                                            />
                                            <p className="services__features">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <Picture
                            className="services__image"
                            src={imgSrc}
                            loading="lazy"
                        />
                    </div>
                ))}
            </Slider>
        </Section>
    )
}