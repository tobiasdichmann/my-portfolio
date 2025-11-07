import "./styles/app.scss";
import "./styles/page-pdf.scss";

// COMPONENTS
import PagePDF from "./components/PagePDF";
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
    <div id="websiteContent">
      <PagePDF
        rootElementId={"websiteContent"}
        downloadFileName={"tobias-portfolio.pdf"}
      />
      <Navbar />

      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
