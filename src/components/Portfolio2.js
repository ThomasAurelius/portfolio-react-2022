import React from "react";
import space from "../assets/fm_space_landscape.png";
import visitry from "../assets/visitry1.png";
import dine from "../assets/fm_dine_landscape.png";
import loop from "../assets/fm_loop_landscape.png";
import nitrohood from "../assets/nitrohood.png";
import webstore from "../assets/webstore_landscape.png";
// import css from "../assets/css.png";
// import github from "../assets/github.png";
// import reactImg from "../assets/react.png";
// import html from "../assets/html.png";
// import tailwind from "../assets/tailwind.png";
// import javascript from "../assets/javascript.png";
// import nextjs from "../assets/nextjs.png";
// import graphql from "../assets/graphql.png";
// import node from "../assets/node.png";
// import express from "../assets/express2.png";
// import apollo from "../assets/apollo.png";
// import sass from "../assets/sass.png";
// import mongo from "../assets/mongodb.png";
// import mui from "../assets/MUI.svg";
// import postman from "../assets/postman.png";
// import vscode from "../assets/vscode.png";
// import vercel from "../assets/vercel.png";
// import heroku from "../assets/heroku.png";
// import ruby from "../assets/ruby-on-rails-icon-17.png";

export default function Portfolio() {
	const portfolios = [
		{
			id: 6,
			src: nitrohood,
			alt: "NextJS Social Media Website",
			site: "Live Demo",
			type: "Source Code Not Available",
			code: "/",
			live: "https://main-smoky-six.vercel.app",
			tech: "NextJS, Clerk, MongoDB, Firebase, HTML, CSS, JavaScript",
		},
		{
			id: 10,
			src: webstore,
			alt: "Full Stack NextJS Webstore",
			site: "Live Demo",
			type: "Source Code",
			code: "https://github.com/ThomasAurelius/ecommerce",
			live: "https://ecommerce-zeta-three.vercel.app/",
			tech: "NextJS, Express, MongoDB",
		},
		{
			id: 11,
			src: visitry,
			alt: "NextJS Home Health Application",
			site: "Live Application",
			type: "Unavailable by contract",
			code: "",
			live: "https://visitry.com",
			tech: "NextJS, Express, Node",
		},
		{
			id: 1,
			src: space,
			alt: "React Space Tourism Website",
			site: "Live Demo",
			type: "Source Code",
			code: "https://github.com/ThomasAurelius/fm_space-tourism-website-main",
			live: "https://thomasaurelius.github.io/fm_space-tourism-website-main/",
			tech: "React, TailwindCSS",
		},
		{
			id: 3,
			src: dine,
			alt: "Responsive Restaurant Website",
			site: "Live Demo",
			type: "Source Code",
			code: "https://github.com/ThomasAurelius/fm_dine-restaurant-website",
			live: "https://thomasaurelius.github.io/fm_dine-restaurant-website/",
			tech: "HTML, CSS, JavaScript",
		},
		{
			id: 5,
			src: loop,
			alt: "Responsive VR Service Website",
			site: "Live Demo",
			type: "Source Code",
			code: "https://github.com/ThomasAurelius/fm_loopstudios-landing-page-main",
			live: "https://thomasaurelius.github.io/fm_loopstudios-landing-page-main/",
			tech: "HTML, CSS, JavaScript",
		},
	];

	return (
		<section
			name="portfolio"
			className="bg-gradient-to-b to-gray-800 from-black text-white pb-20 lg:px-12 "
		>
			<article className="max-w-screen-lg p-4 pt-10 mx-auto flex flex-col justify-center w-full h-full ">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
						Portfolio
					</p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm: px-2  md:px-8 m-1">
					{portfolios.map(
						({ id, alt, src, code, live, type, site, tech, icons }) => (
							<div className="card" key={id}>
								<div className="card_content">
									<div className="card_front">
										<div>
											<div>
												<p className="">{alt}</p>
												<img
													src={src}
													alt={alt}
													className="rounded-md "
												/>
											</div>
										</div>
									</div>
									<div className="card_back">
										<p>{alt}</p>
										<div>Key Technologies:</div>
										<div>{tech}</div>
										<div className="flex items-center justify-center ">
											<button className="w-1/2 px-6 py-0 m-1 ">
												<a
													className="text-xs"
													href={live}
													target="_blank"
													rel="noreferrer"
												>
													{" "}
													<span>{site}</span>
												</a>
											</button>
											<button className="w-1/2 px-6 py-0 m-1  ">
												<a
													className="text-xs"
													href={code}
													target="_blank"
													rel="noreferrer"
												>
													<span>{type}</span>
												</a>
											</button>
										</div>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</article>
		</section>
	);
}
