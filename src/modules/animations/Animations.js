import MatchMedia from '@/constants/MatchMedia'
import ScrollManager from '@/modules/animations/ScrollManager'
import HomeHeroAnimations from '@/sections/HomeHero/HomeHero.animations'
import SectionAnimationsCollection from '@/layouts/Section/Section.animations'
import AboutAnimations from '@/sections/About/About.animations'
import ServicesAnimations from '@/sections/Services/Services.animations'
import PortfolioAnimations from '@/sections/Portfolio/Portfolio.animations'
import QuestionsAnimations from '@/sections/Questions/Questions.animations'
import ReviewsAnimations from '@/sections/Reviews/Reviews.animations'
import BrandAnimations from '@/sections/Brand/Brand.animations'
import PageHeroAnimations from '@/components/PageHero/PageHero.animations'
import JourneyAnimations from '@/sections/Journey/Journey.animations'
import PortfolioCollectionsAnimationsCollection from '@/sections/PortfolioCollections/PortfolioCollections.animations'
import ServiceCollectionsAnimationsCollection from '@/sections/ServiceCollections/ServiceCollections.animations'

class Animations {
  constructor() {
    if (MatchMedia.reducedMotion.matches) {
      return
    }

    this.init()
  }

  init() {
    new ScrollManager()
    new HomeHeroAnimations()
    new SectionAnimationsCollection()
    new AboutAnimations()
    new ServicesAnimations()
    new PortfolioAnimations()
    new QuestionsAnimations()
    new ReviewsAnimations()
    new BrandAnimations()
    new PageHeroAnimations()
    new JourneyAnimations()
    new PortfolioCollectionsAnimationsCollection()
    new ServiceCollectionsAnimationsCollection()
  }
}

export default Animations
