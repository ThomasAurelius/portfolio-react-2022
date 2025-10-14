import React from "react";

import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";

export default function Portfolio(): JSX.Element {
	return (
		<section
			id="portfolio"
			className="bg-gradient-to-b to-black from-gray-800 w-full text-white md:h-full pt-8 pb-20 lg:px-12"
		>
			<article className="max-w-screen-lg p-4 pt-10 mx-auto flex flex-col justify-center w-full h-full ">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
						Portfolio
					</p>
				</div>
				<div className="flex flex-wrap gap-8 justify-center mx-auto content-center">
					<Modal4 />

					<Modal1 />

					<Modal2 />

					<Modal3 />
				</div>
			</article>
		</section>
	);
}
