import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import HomePage from "./pages/home"
import AboutPage from "./pages/about/page.jsx"
import ServicesPage from "./pages/services/page.jsx"
import ProjectsPage from "./pages/projects/page.jsx"
import PhotosPage from "./pages/photos"
import ContactPage from "./pages/contact/page.jsx"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
