import React, { useEffect, useState } from "react";
import Modal, { Styles } from "react-modal";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import mongo from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import nitrohood from "../assets/nitrohood.png";
import nitrohood1 from "../assets/nitrohood1.png";
import nitrohood2 from "../assets/nitrohood2.png";
import nitrohood3 from "../assets/nitrohood3.png";
import nitrohood4 from "../assets/nitrohood4.png";
import nitrohood5 from "../assets/nitrohood5.png";
import clerk from "../assets/clerk.png";
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

const Modal2: React.FC = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		Modal.setAppElement("#root");
	}, []);

	const openModal = (): void => {
		console.log("opening modal…");
		setIsOpen(true);
	};

	const closeModal = (): void => {
		setIsOpen(false);
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<button type="button" onClick={openModal}>
				<section className="portfolio-card flex h-full shadow-white shadow-md p-4 rounded-lg justify-center items-center bg-gradient-to-b from-gray-800 to-black">
					<section className="portfolio-card flex flex-col lg:flex-row h-full border-white-1 justify-center items-center">
						<div className="portfolio-img-card w-[400px] flex flex-col">
							<p className="flex text-center justify-center text-xl text-white p-2">
								Next.JS Social Media Site
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
								<img className="w-16" src={firebase} alt="Firebase" />
								<img className="w-16" src={tailwind} alt="Tailwind" />
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
				contentLabel="NitroHood"
			>
				<div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 p-4">
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
						Next.JS Social Media Site
					</h2>
					<Carousel
						className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-md mb-4"
						autoplay={true}
						loop={true}
						autoplayDelay={3000}
						transition={{ duration: 500 }}
						prevArrow={({ handlePrev }) => (
							<IconButton
								variant="text"
								color="black"
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
								color="black"
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
							src={nitrohood}
							alt="NextJS Social Media Website"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={nitrohood1}
							alt="NextJS Social Media  Website"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={nitrohood2}
							alt="NextJS Social Media  Website"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={nitrohood3}
							alt="NextJS Social Media  Website"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={nitrohood4}
							alt="NextJS Social Media  Website"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
						<img
							src={nitrohood5}
							alt="NextJS Social Media Website"
							className="rounded-md w-[400px] duration-200 hover:scale-105"
						/>
					</Carousel>

					<p className="text-lg max-w-[800px] mb-4">
						A niche social media application for car enthusiasts. Offers
						users a platform to showcase their car's custom build and
						photos, connect with other users and sell cars/parts. Built
						with Next.Js, Clerk, MongoDB and Firebase, hosted on Vercel.
						Future releases will include payment integration and premium
						features. Demo account available on request.
					</p>
					<div className="portfolio-tech-card flex flex-col justify-center items-center p-4">
						<p className="text-2xl">Technologies Used:</p>
						<div className="flex flex-wrap justify-center items-center gap-4 m-2">
							<img className="w-16" src={nextjs} alt="NextJs" />
							<img className="w-16" src={clerk} alt="Clerk" />
							<img className="w-16" src={mongo} alt="MongoDB" />
							<img className="w-16" src={firebase} alt="Firebase" />
							<img className="w-16" src={tailwind} alt="Tailwind" />
						</div>
					</div>
					<div className="flex gap-4 mb-4">
						<a
							href="https://main-smoky-six.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="bg-accent text-white px-4 py-2 rounded">
								Visit Website
							</button>
						</a>
					</div>
					<button
						onClick={closeModal}
						className="text-accent bg-black font-bold px-4 py-2 rounded"
					>
						Close
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default Modal2;
