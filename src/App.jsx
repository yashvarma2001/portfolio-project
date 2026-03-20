import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";


function App() {
  return (
    <ThemeProvider>
      <div className="App">
      
          
            <Hero />
            <About />
            <Education />
            <Experience />
            <Contact />

      </div>
    </ThemeProvider>
  );
}

export default App;
