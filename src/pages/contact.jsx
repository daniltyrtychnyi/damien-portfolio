import ContactHero from '@/sections/ContactHero'
import Contact from '@/sections/Contact'
import Reviews from '@/sections/Reviews'

export const metadata = {
    title: 'Contact',
}

export default () => {
    return (
        <>
            <ContactHero />
            <Contact />
            <Reviews />
        </>
    )
}