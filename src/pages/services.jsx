import ServicesHero from '@/sections/ServicesHero'
import ServiceCollections from '@/sections/ServiceCollections'
import Questions from '@/sections/Questions'

export const metadata = {
    title: 'Services',
}

export default () => {
    return (
        <>
            <ServicesHero />
            <ServiceCollections />
            <Questions />
        </>
    )
}