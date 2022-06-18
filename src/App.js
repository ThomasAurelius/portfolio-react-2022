import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <Portfolio />
      <About />      
      <Experience />
      <Contact />
      <Footer />

      <SocialLinks />

    </main>
  );
}

export default App;
