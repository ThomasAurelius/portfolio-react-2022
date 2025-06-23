import React from "react";

const About: React.FC = (): JSX.Element => {
	return (
		<section className="w-full h-full bg-gradient-to-b to-gray-800 from-black text-white pb-20 lg:px-12">
			<article className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>

				<p className="text-2xl mt-10 leading-9">
					We are Full Stack Software Developers, focusing on Next.js,
					MongoDB, React, and Node.js and their ecosystems. My team is
					passionate about clean UI and intuitive user experiences,
					delivering world-class results. I have a strong leadership,
					project management, and business background in addition to
					programming. I enjoy mentoring other developers and supporting
					the dev community. As a process improvement evangelist, I deeply
					believe in the power of leaving everything better than I found
					it, especially code.
				</p>

				<br />

				<p className="text-2xl mt-5 leading-9">
					My principal developer, James, has over 20 years of experience in
					web development and also specializes in Next.js, React, Node.js,
					MongoDB, etc. He also has experience with React Native.
				</p>

				<br />

				<p className="text-2xl mt-5 leading-9 inline">
					Big or small, just starting out or an established practice, we
					can help bring you to the next level. From dynamic splash pages
					to custom applications, we do it all! Set up a call with me today
					to discuss how our agency can bring your business to a higher
					level of success!
				</p>
			</article>
		</section>
	);
};

export default About;
