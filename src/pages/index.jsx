import HomeHero from '@/sections/HomeHero'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Portfolio from '@/sections/Portfolio'
import Questions from '@/sections/Questions'
import Reviews from '@/sections/Reviews'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <HomeHero />
      <About />
      <Services />
      <Portfolio />
      <Questions />
      <Reviews />
    </>
  )
}
