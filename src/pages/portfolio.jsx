import Questions from '@/sections/Questions'
import Reviews from '@/sections/Reviews'
import PortfolioHero from '@/sections/PortfolioHero'
import PortfolioCollections from '@/sections/PortfolioCollections'

export const metadata = {
  title: 'Portfolio',
}

export default () => {
  return (
    <>
      <PortfolioHero />
      <PortfolioCollections />
      <Questions />
      <Reviews />
    </>
  )
}
