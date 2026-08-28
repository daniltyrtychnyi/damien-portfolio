import PageHero from '@/components/PageHero'
import imgDesktop from '@/assets/images/page-hero/contact/bg.png'
import imgLaptop from '@/assets/images/page-hero/contact/bg_laptop.png'
import imgMobile from '@/assets/images/page-hero/contact/bg_mobile.png'

export default () => {
    return (
        <PageHero
            titleId="contact-hero-title"
            subTitle="Contact Me"
            title="Get in Touch with Me"
            description="Step into a world of timeless photography with Damien Braun. Explore our range of photography services, each crafted to tell your unique story through captivating images. Whether it's the magic of portraits, the emotion of events, or the allure of commercial photography, we're here to bring your vision to life."
            desktopImageSrc={imgDesktop}
            laptopImageSrc={imgLaptop}
            mobileImageSrc={imgMobile}
            mode="contact"
            scrollTarget="Scroll Down To Send me a Message"
            hasSocials
        />
    )
}