import "./App.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";

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

      {/* STICKY HERO SECTION */}
      <div className="hero-sticky-wrapper">
        <Hero />
      </div>

      {/* REGULAR SCROLLING CONTENT */}
      <div className="main-content">
        <About />
        <Education />
        <Experience />
        <Contact />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;