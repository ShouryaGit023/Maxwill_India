import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CollectionHighlights from './components/CollectionHighlights'
import TopCategories from './components/TopCategories'
import AboutMaxwill from './components/AboutMaxwill'
import TrendingProducts from './components/TrendingProducts'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { Prod } from './components/Prod'
import { Nav } from './components/Nav'

const Home = () => (
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

const Products = () => (
  <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
    <Nav />
    <Prod />
    <Footer />
  </div>
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}
