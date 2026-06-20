import { Routes, Route } from 'react-router-dom'
import './App.css'
import AboutMe from './AboutMe.tsx'
import Experience from './experience.tsx';
import Certifications from './certifications.tsx';
import Footer from "./components/footer.tsx";
import NavBar from "./components/navbar.tsx";



function App() {
  return (
    <>
      <NavBar />
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="experience" element={<Experience />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="*" element={<AboutMe />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
export default App
