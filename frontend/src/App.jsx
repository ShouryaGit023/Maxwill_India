import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurStoryPage from './components/Our-story'
import { Prod } from './components/Prod'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const ProductsPage = () => (
  <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
    <Prod />
  </div>
)

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
