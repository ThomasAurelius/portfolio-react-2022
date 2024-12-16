import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

export default function Home() {
	return (
		<section
			name="home"
			className="home-section h-full w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20  lg:px-12 md:pt-60 text-center md:text-right"
		>
			<article className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row xs:text-center">
				<div className="flex flex-col justify-center h-full">
					<h1 className="text-center text-6xl pb-3">Thomas Gooch</h1>
					<h2 className="text-3xl sm:text-6xl px-4 font-bold text-white text-center">
						<Typewriter
							options={{
								strings: [
									"Full-Stack Web Developer",
									"Front-End Web Developer",
									"Miracle Technologist",
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</h2>
					<p className="text-gray-400 py-4 px-4 max-w-xlg self-center text-center sm:text-3xl text-2xl ">
						I create unique and modern web experiences using the internets
						most powerful and proven technologies. From front-end splash
						pages, to full-featured database driven applications, I can
						deliver a world class experience for your audience.{" "}
					</p>

					<div className="self-center">
						<Link to={"portfolio"} smooth duration={500}>
							<button className="group text-white  px-6 py-3 my-2 flex items-center rounded-md accent-color cursor-pointer md:mb-40 ">
								Portfolio
								<span className="group-hover:rotate-90 duration-300 pl-1">
									<BsArrowRight size={20} className="ml-1" />
								</span>
							</button>
						</Link>
						<a
							href="https://calendly.com/thomas-e-gooch"
							target="_blank"
							rel="noreferrer"
						>
							<button className="group text-white  px-6 py-3 my-2 flex items-center rounded-md accent-color cursor-pointer md:mb-40 ">
								Schedule a meeting!
							</button>
						</a>
					</div>
				</div>
				<div></div>
			</article>
		</section>
	);
}
