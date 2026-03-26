import "./App.css";
import { useState, useEffect } from "react";
import About from "./sections/About";
// import AcademicProjects from "./sections/HorizantalProjects"; // Import the new section
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
// import Publications from "./sections/Publications"; // Import Publications section
import AcademicPortfolio from "./sections/AcademicPortfolio";

function App() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const newOpacity = 1 - (scrollPos / 700);
      setOpacity(newOpacity > 0 ? newOpacity : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <ScrollProgress />

      <div id="hero" className="hero-sticky-wrapper" style={{ opacity }}>
        <Hero />
      </div>

      <div className="main-content">
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>

        <section id="projects"><AcademicPortfolio /></section>
        <section id="contact"><Contact /></section>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;