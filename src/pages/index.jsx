import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'

export const metadata = {
    title: 'Home',
}

export default function () {
  return (
    <>
        <Hero />
        <About />
        <Services />
    </>
  )
}
