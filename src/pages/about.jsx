import AboutHero from '@/sections/AboutHero'
import Reviews from '@/sections/Reviews'
import Journey from '@/sections/Journey'

export const metadata = {
    title: 'About Me',
}

export default () => {
    return (
        <>
            <AboutHero />
            <Journey />
            <Reviews />
        </>
    )
}