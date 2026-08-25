import PageHero from '@/components/PageHero'
import imgDesktop from '/src/assets/images/page-hero/services/bg.png'
import imgLaptop from '/src/assets/images/page-hero/services/bg_laptop.jpg'

export default () => {
    return (
        <PageHero
            titleId="services-hero-title"
            subTitle="Services"
            title="Diverse Photography Offerings"
            description="Unlock the full spectrum of professional photography services tailored to your vision. From timeless portraits to captivating event coverage, I bring a unique blend of creativity and technical expertise to each project."
            mode="services"
            desktopImageSrc={imgDesktop}
            laptopImageSrc={imgLaptop}
            scrollTarget="Scroll Down To See All Services"
            hasDecor
        />
    )
}