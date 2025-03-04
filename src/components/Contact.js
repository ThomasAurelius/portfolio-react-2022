import React from "react";

export default function Contact() {
	return (
		<section
			name="contact"
			id="contact"
			className="w-full h-full bg-gradient-to-b to-gray-800 from-black p-4 text-white  lg:px-12"
		>
			<article className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
				<div className="pb-4">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Contact
					</p>
					<p className="py-6">
						Submit the form below to get in contact with me!
					</p>
				</div>

				<div className="flex justify-center items-center">
					<form
						action="https://formsubmit.co/d2d59d00764163f2afb4245d15e42566"
						method="POST"
						className="flex flex-col w-full md:w-1/2 mx-auto"
					>
						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<textarea
							name="message"
							placeholder="Enter your message"
							rows="10"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline:none"
						></textarea>
						<input
							type="hidden"
							name="_next"
							value="https://thomasgooch.dev/thanks/index.html"
						></input>
						<input type="text" name="_honey" className="display-none" />
						<input
							type="hidden"
							name="_subject"
							value="New submission!"
						></input>

						<button className="text-white accent-color px-6 py-3 my-8 mx-auto flex items bg-center rounded-md hover:scale-110">
							Submit
						</button>
					</form>
				</div>
			</article>
		</section>
	);
}
