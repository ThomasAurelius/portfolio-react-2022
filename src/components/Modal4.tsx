import React, { useEffect } from "react";
import Modal, { Styles } from "react-modal";
import tgc from "../assets/screenshot-tgc.png";
import tgc0 from "../assets/tgc0.png";
import tgc1 from "../assets/tgc1.png";
import tgc2 from "../assets/tgc2.png";
import tgc3 from "../assets/tgc3.png";
import tgc4 from "../assets/tgc4.png";
import tgc5 from "../assets/tgc5.png";
import tgc6 from "../assets/tgc6.png";
import tgc7 from "../assets/tgc7.png";
import nextjs from "../assets/nextjs.png";
import stripe from "../assets/stripe.svg";
import mongo from "../assets/mongodb.png";
import express from "../assets/express2.png";
import firebase from "../assets/firebase.png";
import { Carousel, IconButton } from "@material-tailwind/react";

const customStyles: Styles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "black",
		border: "1px solid white",
		borderRadius: "10px",
		padding: "0px",
		color: "white",
	},
};

export default function Modal4(): JSX.Element {
	// Use the Next.js mount point
	useEffect(() => {
		Modal.setAppElement("#root");
	}, []);
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	function openModal(): void {
		console.log("opening modal…");
		setIsOpen(true);
	}

	function closeModal(): void {
		setIsOpen(false);
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<button type="button" onClick={openModal}>
				<section className="portfolio-card flex h-full   p-4 rounded-lg  justify-center items-center bg-gradient-to-b from-gray-800 to-black ">
					<section className="portfolio-card flex flex-col lg:flex-row h-full border-white-1 justify-center items-center">
						<div className="portfolio-img-card w-[400px] flex flex-col ">
							<p className="flex text-center justify-center text-xl  text-white p-2">
								The Gathering Call
							</p>
							<img
								src={tgc}
								alt="The Gathering Call"
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
								<button className="flex mt-8 gap-4 mb-4 bg-accent text-white px-4 py-2 rounded">
									Details
								</button>
							</div>
						</div>
					</section>
				</section>
			</button>

			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Gathering"
			>
				<div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 p-4">
					{/* Close "X" button */}
					<button
						onClick={closeModal}
						className="absolute top-2 right-2 p-2 focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<h2 className="text-2xl font-bold mb-4">
						The Gathering Call - Board Game Ecommerce Site
					</h2>
					<Carousel
						className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-md mb-4"
						autoplay={true}
						loop={true}
						autoplayDelay={3000}
						prevArrow={({ handlePrev }) => (
							<IconButton
								variant="text"
								color="white"
								size="lg"
								onClick={handlePrev}
								className="!absolute top-2/4 left-4 -translate-y-2/4"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
									/>
								</svg>
							</IconButton>
						)}
						nextArrow={({ handleNext }) => (
							<IconButton
								variant="text"
								color="white"
								size="lg"
								onClick={handleNext}
								className="!absolute top-2/4 !right-4 -translate-y-2/4"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
									/>
								</svg>
							</IconButton>
						)}
					>
						<img
							src={tgc0}
							alt="The Gathering Call"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={tgc1}
							alt="The Gathering Call"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={tgc2}
							alt="The Gathering Call"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={tgc3}
							alt="The Gathering Call"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={tgc4}
							alt="The Gathering Call"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={tgc5}
							alt="The Gathering Call"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={tgc6}
							alt="The Gathering Call"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={tgc7}
							alt="The Gathering Call"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
					</Carousel>
					<p className="text-lg max-w-[800px] mb-4">
						A board game ecommerce site built with Next.js, MongoDB,
						Express, and Stripe for payment processing. Features include
						character, game and campaign management, subscriptions and one
						time payments, user authentication, and user to user
						messaging. The site is fully responsive and optimized for
						performance, conquering the biggest villain of board gaming -
						scheduling!
					</p>
					<div className="portfolio-tech-card flex flex-col justify-center items-center p-4">
						<p className="text-2xl">Technologies Used:</p>
						<div className="flex flex-wrap justify-center items-center gap-4 m-2">
							<img className="w-16" src={nextjs} alt="NextJs" />
							<img className="w-16" src={stripe} alt="Stripe" />
							<img className="w-16" src={mongo} alt="MongoDB" />
							<img className="w-16" src={firebase} alt="Firebase" />
							<img className="w-16" src={express} alt="Express" />
						</div>
					</div>
					<button className="flex gap-4 mb-4">
						<a
							href="https://thegatheringcall.com/technical-reference"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="bg-accent text-white px-4 py-2 rounded">
								Visit Website
							</button>
						</a>
					</button>
				</div>
			</Modal>
		</div>
	);
}
