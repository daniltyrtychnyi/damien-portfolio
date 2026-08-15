import Questions from '@/sections/Questions'
import Reviews from '@/sections/Reviews'
import PortfolioHero from '@/sections/PortfolioHero'

export const metadata = {
    title: 'Portfolio',
}

export default () => {
    return (
        <>
            <PortfolioHero />
            <Questions />
            <Reviews />
        </>
    )
}