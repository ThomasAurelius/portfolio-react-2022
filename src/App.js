import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";

import Portfolio from "./components/Portfolio";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About2 from "./components/About2";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <Portfolio />
       
      <About2 />   
      
      <Contact />
      <Footer />

      <SocialLinks />

    </main>
  );
}

export default App;
