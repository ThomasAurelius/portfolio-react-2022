import React from "react";
import photo from "../assets/ta-01.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import reactImg from "../assets/react.png";
import html from "../assets/html.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import node from "../assets/node.png";
import express from "../assets/express2.png";
import apollo from "../assets/apollo.png";
import sass from "../assets/sass.png";
import mongo from "../assets/mongodb.png";
import mui from "../assets/MUI.svg";
import postman from "../assets/postman.png";
import vscode from "../assets/vscode.png";
import vercel from "../assets/vercel.png";
import heroku from "../assets/heroku.png";
import ruby from "../assets/ruby-on-rails-icon-17.png";

export default function About2() {
	return (
		<section
			name="about"
			className="w-full h-full bg-gradient-to-b to-gray-800 from-black text-white pb-20 lg:px-12 "
		>
			<article className="max-w-screen-lg p-4 mx-auto  justify-center w-full h-full  ">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<div className="about2-top flex gap-5 mx-auto justify-center content-center">
					<img src={photo} className="selfie " alt="Thomas Gooch" />

					<div className="flex technology-wrapper flex-col gap-3">
						<p>Front End Technologies:</p>
						<div className="technology-icons flex">
							<div className="tooltip">
								<img
									src={html}
									className="tooltipicon"
									alt="html badge"
								/>
								<span className="tooltiptext">HTML</span>
							</div>
							<div className="tooltip">
								<img src={css} alt="css badge" />
								<span className="tooltiptext">CSS</span>
							</div>
							<div className="tooltip">
								<img src={javascript} alt="javascript badge" />
								<span className="tooltiptext">JavaScript</span>
							</div>
							<div className="tooltip">
								<img src={reactImg} alt="react badge" />
								<span className="tooltiptext">React</span>
							</div>
							<div className="tooltip">
								<img src={nextjs} alt="nextjs badge" />
								<span className="tooltiptext">Next.js</span>
							</div>
							<div className="tooltip">
								<img src={tailwind} alt="tailwind badge" />
								<span className="tooltiptext">Tailwind</span>
							</div>
							<div className="tooltip">
								<img src={mui} alt="mui badge" />
								<span className="tooltiptext">Material UI</span>
							</div>
							<div className="tooltip">
								<img src={sass} alt="sass badge" />
								<span className="tooltiptext">Sass</span>
							</div>
						</div>
						<p>Back End Technologies:</p>

						<div className="technology-icons flex">
							<div className="tooltip">
								<img src={ruby} alt="ruby badge" />
								<span className="tooltiptext">Ruby on Rails</span>
							</div>
							<div className="tooltip">
								<img src={node} alt="node badge" />
								<span className="tooltiptext">Node.js</span>
							</div>
							<div className="tooltip">
								<img src={express} alt="express badge" />
								<span className="tooltiptext">Express</span>
							</div>
							<div className="tooltip">
								<img src={mongo} alt="mongo badge" />
								<span className="tooltiptext">MongoDB</span>
							</div>
							<div className="tooltip">
								<img src={graphql} alt="graphql badge" />
								<span className="tooltiptext">GraphQL</span>
							</div>
							<div className="tooltip">
								<img src={apollo} alt="apollo badge" />
								<span className="tooltiptext">Apollo</span>
							</div>
						</div>
						<p>Tools:</p>
						<div className="technology-icons flex">
							<div className="tooltip">
								<img src={github} alt="github badge" />
								<span className="tooltiptext">GitHub</span>
							</div>
							<div className="tooltip">
								<img src={vscode} alt="vscode badge" />
								<span className="tooltiptext">VS Code</span>
							</div>
							<div className="tooltip">
								<img src={postman} alt="postman badge" />
								<span className="tooltiptext">Postman</span>
							</div>
							<div className="tooltip">
								<img src={vercel} alt="vercel badge" />
								<span className="tooltiptext">Vercel</span>
							</div>
							<div className="tooltip">
								<img src={heroku} alt="heroku badge" />
								<span className="tooltiptext">Heroku</span>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4">
					<p className="text-1xl mt-5 leading-2">
						{" "}
						I am passionate about clean UI and intuitive user experiences.
						I have a strong leadership background and enjoy mentoring
						other developers, and supporting the dev community. As a
						process improvement evangelist, I deeply believe in the power
						of leaving everything better than I found it, especially code.
					</p>
					<br />
					<p className="text-1xl mt-5 leading-2">
						In my daily life, I am a father of two amazing teenagers, as
						well as a dog dad to a wonderfully sweet Dachshund, named
						Jackson, and a pint sized terror of a Dachshund named Bernie.
						I enjoy gardening, gaming(board, card and console), painting
						miniatures as well as reading, and tinkering with electronics.
					</p>
					<br />
					<p className="text-1xl mt-5 leading-2 inline">
						I am currently very happily employed and not looking for full
						time opportunities. I am open for select contract
						opportunities that pique my interest and provide a challenge.{" "}
					</p>
				</div>
			</article>
		</section>
	);
}
