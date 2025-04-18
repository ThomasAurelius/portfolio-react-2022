import React from "react";
import photo from "../assets/tg02.jpg";
import css from "../assets/css.png";
import github from "../assets/github.png";
import reactImg from "../assets/react.png";
import html from "../assets/html.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import express from "../assets/express2.png";
import mongo from "../assets/mongodb.png";
import mui from "../assets/MUI.svg";
import postman from "../assets/postman.png";
import vscode from "../assets/vscode.png";
import vercel from "../assets/vercel.png";
import heroku from "../assets/heroku.png";
import sql from "../assets/sql.png";

export default function About2() {
	return (
		<section
			name="about"
			className="bg-gradient-to-b to-black from-gray-800 w-full text-white md:h-full  pt-8 pb-20 lg:px-12"
		>
			<article className="max-w-screen-lg p-4 mx-auto  justify-center w-full h-full  ">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<div className="about2-top flex gap-5 mx-auto justify-center content-center">
					<img
						src={photo}
						className="selfie rounded-xl"
						alt="Thomas Gooch Full Stack Web Develeper in Austin Tx"
					/>

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
						</div>
						<p>Back End Technologies:</p>

						<div className="technology-icons flex">
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
								<img src={sql} alt="sql badge" />
								<span className="tooltiptext">SQL</span>
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
					<p className="text-2xl mt-5 leading-2">
						I am passionate about clean UI and intuitive user experiences.
						I am a big believer in the{" "}
						<a
							href="https://en.wikipedia.org/wiki/The_Four_Agreements"
							target="_blank"
							className="text-blue-600"
							rel="noreferrer"
						>
							Four Agreements.{" "}
						</a>
						I have a strong leadership background and enjoy mentoring
						other developers, and supporting the dev community as an
						organizer for the meetup group{" "}
						<a
							href="https://www.meetup.com/code-coop-austin"
							target="_blank"
							className="text-blue-600"
							rel="noreferrer"
						>
							Code CoOp Austin
						</a>
						.<br></br> I own and operate{" "}
						<a
							href="https://midnightoil.software"
							className="text-blue-600"
							target="_blank"
							rel="noreferrer"
						>
							Midnight Oil Software LLC.
						</a>
						, a software development agency with 1 other developer. I do
						all that work after hours.<br></br> As a process improvement
						evangelist, I deeply believe in the power of leaving
						everything better than I found it, especially code.
					</p>
					<br />
					<p className="text-2xl mt-5 leading-2">
						A peek in my{" "}
						<a
							href="https://instagram.com/thomasofaurelius"
							target="_blank"
							className="text-blue-600"
							rel="noreferrer"
						>
							Instagram
						</a>{" "}
						will show you a slice of my daily life. I am a father of two
						amazing teenagers, as well as a dog dad to a wonderfully sweet
						Dachshund, named Jackson, and a pint sized terror of a
						Dachshund named Bernie. I enjoy gardening, gaming(board, card
						and console), painting miniatures as well as reading, and
						tinkering with electronics.
					</p>
					<br />
					<p className="text-2xl mt-5 leading-2 inline">
						While I am very happily employed, my dream is to work fully
						asyncronous and remote, so if you're looking for an async
						remote developer, hit me up!{" "}
					</p>
				</div>
			</article>
		</section>
	);
}
