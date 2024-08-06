import Navbar from "./UI/Navbar";
import Hero from "./UI/Hero";
import About from "./UI/About";
import Skills from "./UI/Skills";
import Projects from "./UI/Projects";
import Contact from "./UI/Contact";
import Footer from "./UI/Footer";

function App() {
  return (
    <>
      <div className="m-5">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
