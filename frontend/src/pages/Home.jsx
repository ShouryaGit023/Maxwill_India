import Hero from '../components/Hero'
import CollectionHighlights from '../components/CollectionHighlights'
import TopCategories from '../components/TopCategories'
import AboutMaxwill from '../components/AboutMaxwill'
import TrendingProducts from '../components/TrendingProducts'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionHighlights />
      <TopCategories />
      <AboutMaxwill />
      <TrendingProducts />
      <Testimonials />
    </>
  )
}
