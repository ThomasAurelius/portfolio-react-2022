import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";

import Portfolio3 from "./components/Portfolio3";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About2 from "./components/About2";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";

function App() {
	return (
		<main className="App">
			<Navbar />
			<Home />

			<Portfolio3 />
			<Experience />
			<About2 />
			<Testimonials />
			<Contact />
			<Footer />

			<SocialLinks />
		</main>
	);
}

export default App;
