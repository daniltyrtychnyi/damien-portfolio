import PageHero from '@/components/PageHero'

export default () => {
  return (
    <PageHero
      titleId="contact-hero-title"
      subTitle="Contact Me"
      title="Get in Touch with Me"
      description="Step into a world of timeless photography with Damien Braun. Explore our range of photography services, each crafted to tell your unique story through captivating images. Whether it's the magic of portraits, the emotion of events, or the allure of commercial photography, we're here to bring your vision to life."
      desktopImageSrc="/src/assets/images/page-hero/contact/bg.png"
      laptopImageSrc="/src/assets/images/page-hero/contact/bg_laptop.png"
      mobileImageSrc="/src/assets/images/page-hero/contact/bg_mobile.png"
      mode="contact"
      scrollTarget="Scroll Down To Send me a Message"
      hasSocials
    />
  )
}
