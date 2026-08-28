import './AboutHero.scss'
import PageHero from '@/components/PageHero'
import imgDesktop from '@/assets/images/page-hero/about/bg.png'
import imgLaptop from '@/assets/images/page-hero/about/bg_laptop.jpg'

export default () => {
    return (
        <PageHero
            titleId="about-title"
            subTitle="About"
            title="About damien braun"
            metrics={[
                {
                    label: 'Years in Business',
                    value: '15',
                    unit: '+',
                },
                {
                    label: 'Happy Clients',
                    value: '500',
                    unit: '+',
                },
                {
                    label: 'Photography Awards',
                    value: '10',
                    unit: '+',
                },
                {
                    label: 'International Shoots',
                    value: '05',
                    unit: '+',
                },
                {
                    label: 'Social Media Followers',
                    value: '10,000',
                    unit: '+',
                },
                {
                    label: 'Client Retention Rate',
                    value: '90',
                    unit: '%',
                },
            ]}
            desktopImageSrc={imgDesktop}
            laptopImageSrc={imgLaptop}
            scrollTarget="Scroll Down To See My Journey"
            hasDecor
        >
            <div className="about-hero__biography container">
                <h2 className="about-hero__biography-title h3">
                    My Biography
                </h2>
                <div className="about-hero__biography-description">
                    <p>
                        Damien Braun's love affair with photography began at a young age, nurtured by the captivating
                        landscapes and vibrant cultures surrounding her in the heart of the USA. Her passion for
                        storytelling through imagery led her to embark on a photography journey that has spanned over 15
                        years.
                        Driven by an insatiable curiosity to explore the beauty in everyday moments, Damien has honed
                        her craft meticulously. Her background in digital media provided her with a solid foundation,
                        but it's her keen eye for detail and an innate ability to capture raw emotions that truly set
                        her apart.
                        Damien's journey is more than just taking pictures; it's about capturing the essence of the
                        human spirit, the fleeting magic of nature, and the emotions that define our lives. With each
                        click of her camera, she weaves stories that transcend time and space.
                    </p>
                </div>
            </div>
        </PageHero>
    )
}