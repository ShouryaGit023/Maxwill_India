import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CollectionHighlights from './components/CollectionHighlights'
import TopCategories from './components/TopCategories'
import AboutMaxwill from './components/AboutMaxwill'
import TrendingProducts from './components/TrendingProducts'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CollectionHighlights />
        <TopCategories />
        <AboutMaxwill />
        <TrendingProducts />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
