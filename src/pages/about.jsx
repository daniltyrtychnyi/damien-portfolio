import AboutHero from '@/sections/AboutHero'
import Reviews from '@/sections/Reviews'

export const metadata = {
    title: 'About Me',
}

export default () => {
    return (
        <>
            <AboutHero />
            <Reviews />
        </>
    )
}