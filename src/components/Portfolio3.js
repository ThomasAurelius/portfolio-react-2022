import React from "react";
import space from "../assets/fm_space_landscape.png";
import visitry from "../assets/visitry1.png";
import dine from "../assets/fm_dine_landscape.png";
import loop from "../assets/fm_loop_landscape.png";
import nitrohood from "../assets/nitrohood.png";
import webstore from "../assets/webstore_landscape.png";

import css from "../assets/css.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
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
import clerk from "../assets/clerk.png";
import firebase from "../assets/firebase.png";
import stripe from "../assets/stripe.svg";
import simply from "../assets/simply.png";

export default function Portfolio() {
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
				<div className="">
					<section className="portfolio-card flex h-full border-white-1 justify-center items-center">
						<a
							className="flex justify-center items-center"
							href="https://main-smoky-six.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="portfolio-img-card w-[400px] flex flex-col ">
								<p className="flex text-center justify-center text-xl  text-white p-2">
									Next.JS Social Media Website
								</p>
								<img
									src={nitrohood}
									alt="NextJS Social Media Website"
									className="rounded-md w-[400px] duration-200 hover:scale-105"
								/>
							</div>
							<div className="portfolio-tech-card flex flex-col justify-center items-center p-4">
								<p className="text-2xl">Technologies Used:</p>
								<div className="flex flex-wrap justify-center items-center gap-4 m-2">
									<img className="w-16" src={nextjs} alt="NextJs" />
									<img className="w-16" src={clerk} alt="Clerk" />
									<img className="w-16" src={mongo} alt="MongoDB" />
									<img
										className="w-16"
										src={firebase}
										alt="Firebase"
									/>
								</div>
								<div className="flex w-[400px] flex-col justify-center items-center p-2">
									<p className="text-lg mb-4">
										A niche social media application for car
										enthusiasts. Built with Next.Js, Clerk, MongoDB
										and Firebase, hosted on Vercel. Future releases
										will include payment integration and premium
										features. Demo account available on request.
									</p>
								</div>
							</div>
						</a>
					</section>
					<hr></hr>
					<section className="portfolio-card flex h-full border-white-1 justify-center items-center">
						<a
							className="flex justify-center items-center"
							href="https://simplyroomyorganizing.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="portfolio-img-card w-[400px] flex flex-col ">
								<p className="flex text-center justify-center text-xl  text-white p-2">
									Home Organizing Website for a client
								</p>
								<img
									src={simply}
									alt="Home Health Website"
									className="rounded-md w-[400px] duration-200 hover:scale-105"
								/>
							</div>
							<div className="portfolio-tech-card flex flex-col justify-center items-center p-4">
								<p className="text-2xl">Technologies Used:</p>
								<div className="flex flex-wrap justify-center items-center gap-4 m-2">
									<img className="w-16" src={html} alt="HTML" />
									<img className="w-16" src={css} alt="CSS" />
									<img
										className="w-16"
										src={javascript}
										alt="Javascript"
									/>
								</div>
								<div className="flex w-[400px] flex-col justify-center items-center p-2">
									<p className="text-lg mb-4">
										A small business web page I made for a client,
										over a weekend, in a rush as her old hosting was
										expiring and she needed a new one. I used HTML,
										CSS and Javascript to create a simple, yet
										effective website for her home organizing
										business. The website is hosted on GoDaddy.
									</p>
								</div>
							</div>
						</a>
					</section>
					<hr></hr>
					<section className="portfolio-card flex h-full border-white-1 justify-center items-center">
						<a
							className="flex justify-center items-center"
							href="https://visitry.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="portfolio-img-card w-[400px] flex flex-col ">
								<p className="flex text-center justify-center text-xl  text-white p-2">
									Next.JS E-Commerce Webstore
								</p>
								<img
									src={webstore}
									alt="NextJS E-Commerce Website"
									className="rounded-md w-[400px] duration-200 hover:scale-105"
								/>
							</div>
							<div className="portfolio-tech-card flex flex-col justify-center items-center p-4">
								<p className="text-2xl">Technologies Used:</p>
								<div className="flex flex-wrap justify-center items-center gap-4 m-2">
									<img className="w-16" src={nextjs} alt="NextJs" />
									<img className="w-16" src={stripe} alt="Stripe" />
									<img className="w-16" src={mongo} alt="MongoDB" />
									<img className="w-16" src={express} alt="Express" />
								</div>
								<div className="flex w-[400px] flex-col justify-center items-center p-2">
									<p className="text-lg mb-4">
										A demo e-commerce webstore built with Next.js,
										Stripe, Sanity CMS and MongoDB. Features include
										product management, user authentication, and a
										fully functional shopping cart. The webstore is
										hosted on Vercel.
									</p>
								</div>
							</div>
						</a>
					</section>
					<hr></hr>
					<section className="portfolio-card flex h-full border-white-1 justify-center items-center">
						<a
							className="flex justify-center items-center"
							href="https://thomasaurelius.github.io/fm_space-tourism-website-main/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="portfolio-img-card w-[400px] flex flex-col ">
								<p className="flex text-center justify-center text-xl  text-white p-2">
									Front-End Mentor Space Challenge
								</p>
								<img
									src={space}
									alt="Space website"
									className="rounded-md w-[400px] duration-200 hover:scale-105"
								/>
							</div>
							<div className="portfolio-tech-card flex flex-col justify-center items-center p-4">
								<p className="text-2xl">Technologies Used:</p>
								<div className="flex flex-wrap justify-center items-center gap-4 m-2">
									<img className="w-16" src={react} alt="react" />
									<img className="w-16" src={html} alt="HTML" />
									<img className="w-16" src={css} alt="CSS" />
									<img
										className="w-16"
										src={javascript}
										alt="Javascript"
									/>
								</div>
								<div className="flex w-[400px] flex-col justify-center items-center p-2">
									<p className="text-lg mb-4">
										A challenge from Front-End Mentor, where you are
										given a design and challenged with replicating it
										with your preferred technologies. This simulates a
										front end developer's role with a client/ or
										company with a dedicated UI/UX team.
									</p>
								</div>
							</div>
						</a>
					</section>
				</div>
			</article>
		</section>
	);
}
