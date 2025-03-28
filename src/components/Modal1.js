import React from "react";
import nitrohood from "../assets/nitrohood.png";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root"); // Set the app element for accessibility

const Modal1 = () => {
	const [open, setOpen] = React.useState(false);
	const [close, setClose] = React.useState(false);

	function openModal() {
		setOpen(true);
	}

	function closeModal() {
		setOpen(false);
	}

	return (
		<div>
			<button
				onClick={openModal}
				className="shadow-md shadow-gray-600 rounded-lg"
			>
				<img
					src={nitrohood}
					alt="NextJS Social Media Website"
					className="rounded-md duration-200 hover:scale-105"
				></img>
				<p className="flex text-center justify-center text-xl font-bold text-white pt-2">
					NitroHood
				</p>
			</button>
			<Modal
				open={open}
				onClose={closeModal}
				style={customStyles}
				contentLabel="NitroHood"
			>
				<div className="flex flex-col justify-center items-center p-4">
					<h2 className="text-2xl font-bold mb-4">NitroHood</h2>
					<img
						src={nitrohood}
						alt="NextJS Social Media Website"
						className="rounded-md mb-4"
					/>
					<p className="text-lg mb-4">
						A social media website built with Next.js and Tailwind CSS.
					</p>
					<button
						onClick={closeModal}
						className="bg-blue-500 text-white px-4 py-2 rounded"
					>
						Close
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default Modal1;
