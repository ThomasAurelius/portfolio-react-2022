import React, { useEffect, useState } from "react";
import Modal, { Styles } from "react-modal";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import mongo from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import paypal from "../assets/paypal.png";
import rescue from "../assets/rescue.png";
import rescue1 from "../assets/rescue1.png";
import rescue2 from "../assets/rescue2.png";
import rescue3 from "../assets/rescue3.png";
import rescue4 from "../assets/rescue4.png";
import rescue5 from "../assets/rescue5.png";
import rescue6 from "../assets/rescue6.png";
import { Carousel } from "@material-tailwind/react";

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

const Modal1: React.FC = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		// ensure modal accessibility
		Modal.setAppElement("body");
	}, []);

	const openModal = (): void => setIsOpen(true);
	const closeModal = (): void => setIsOpen(false);

	return (
		<div className="flex flex-col justify-center items-center">
			<button type="button" onClick={openModal}>
				<section className="portfolio-card flex h-full border-slate-800 rounded-lg shadow-white shadow-md p-4 justify-center items-center bg-gradient-to-b from-gray-800 to-black">
					<section className="portfolio-card flex flex-col lg:flex-row h-full border-white-1 justify-center items-center">
						<div className="portfolio-img-card w-[400px] flex flex-col">
							<p className="flex text-center justify-center text-xl text-white p-2">
								Next.JS Dachshund Rescue
							</p>
							<img
								src={rescue}
								alt="NextJS Dachshund Rescue Website"
								className="rounded-md w-[400px] duration-200 hover:scale-105"
							/>
						</div>
						<div className="portfolio-tech-card flex flex-col justify-center items-center p-4">
							<p className="text-2xl">Technologies Used:</p>
							<div className="flex flex-wrap justify-center items-center gap-4 m-2">
								<img className="w-16" src={nextjs} alt="NextJs" />
								<img className="w-16" src={mongo} alt="MongoDB" />
								<img className="w-16" src={firebase} alt="Firebase" />
								<img className="w-16" src={tailwind} alt="Tailwind" />
								<img className="w-16" src={paypal} alt="PayPal" />
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
				contentLabel="Dachshund Rescue Details"
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
						Next.JS Dachshund Rescue
					</h2>
					<Carousel
						className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-md mb-4"
						autoplay={true}
						loop={true}
						autoplayDelay={3000}
						transition={{ duration: 500 }}
						prevArrow={({ handlePrev }) => (
							<button
								onClick={handlePrev}
								className="absolute top-1/2 left-4 -translate-y-1/2 p-2 focus:outline-none"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="h-6 w-6 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
									/>
								</svg>
							</button>
						)}
						nextArrow={({ handleNext }) => (
							<button
								onClick={handleNext}
								className="absolute top-1/2 right-4 -translate-y-1/2 p-2 focus:outline-none"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="h-6 w-6 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
									/>
								</svg>
							</button>
						)}
					>
						{[
							rescue,
							rescue1,
							rescue2,
							rescue3,
							rescue4,
							rescue5,
							rescue6,
						].map((imgSrc, idx) => (
							<img
								key={idx}
								src={imgSrc}
								alt={`Slide ${idx + 1}`}
								className="rounded-md w-[400px] duration-200 hover:scale-105"
							/>
						))}
					</Carousel>

					<p className="text-lg max-w-[800px] mb-4">
						A Dachshund Rescue website built with Next.js and Tailwind CSS
						with a PayPal integration. This site solves the administration
						problem of a dachshund rescue organization by allowing users
						to browse available dogs, submit adoption applications, and
						manage user accounts. The website is hosted on Vercel and
						powered by Firebase for image control, and MongoDB for data
						storage.
					</p>

					<div className="portfolio-tech-card flex flex-col justify-center items-center p-4">
						<p className="text-2xl">Technologies Used:</p>
						<div className="flex flex-wrap justify-center items-center gap-4 m-2">
							<img className="w-16" src={nextjs} alt="NextJs" />
							<img className="w-16" src={mongo} alt="MongoDB" />
							<img className="w-16" src={firebase} alt="Firebase" />
							<img className="w-16" src={tailwind} alt="Tailwind" />
							<img className="w-16" src={paypal} alt="PayPal" />
						</div>
					</div>

					<div className="flex gap-4 mb-4">
						<a
							href="https://rescue-tau.vercel.app/"
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

export default Modal1;
