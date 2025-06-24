import React from "react";
import Typewriter from "typewriter-effect";
import ta01 from "../assets/ta-01.png";

interface HomeProps {}

const Home: React.FC<HomeProps> = (): JSX.Element => {
	return (
		<section
			id="home"
			className="home-section h-full w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20 lg:px-12 md:pt-60 text-center md:text-right"
		>
			<article className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row xs:text-center">
				<div className="flex flex-col justify-center items-center h-full">
					<img
						src={ta01}
						alt="Thomas Gooch Full Stack Web Developer in Austin Tx"
						className="w-40 md:w-60 mb-4 rounded-xl mx-auto md:mx-0"
					/>
					<h1 className="text-center text-6xl pb-3">Thomas Gooch</h1>
					<h2 className="text-3xl sm:text-6xl px-4 font-bold text-white text-center">
						<Typewriter
							options={{
								strings: [
									"Full-Stack Web Developer",
									"Software Engineer",
									"Miracle Technologist",
									"Solutions Architect",
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</h2>
					<p className="text-gray-400 py-4 px-4 max-w-xlg self-center text-center sm:text-3xl text-xl">
						I build modern web applications with a proactive, flexible
						approach, specializing in solving complex problems across
						responsive front-end interfaces and robust, database-driven
						backend systems.
					</p>

					<div className="self-center heroButtons">
						<a
							href="https://calendly.com/thomas-e-gooch"
							target="_blank"
							rel="noreferrer"
						>
							<button className="group text-white px-6 py-3 my-2 flex items-center rounded-md accent-color cursor-pointer md:mb-40">
								Schedule a meeting!
							</button>
						</a>
					</div>
				</div>
				<div />
			</article>
		</section>
	);
};

export default Home;
