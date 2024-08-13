import Navbar from "./UI/Navbar";
import Hero from "./UI/Hero";
import About from "./UI/About";
import Skills from "./UI/Skills";
import Projects from "./UI/Projects";
import Contact from "./UI/Contact";
import Footer from "./UI/Footer";
import { DarkModeProvider } from "./contexts/DarkMode";

function App() {
  return (
    <DarkModeProvider>
      <div className="m-5 ">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
