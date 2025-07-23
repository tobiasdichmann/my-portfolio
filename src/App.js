import "./styles/app.scss";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
