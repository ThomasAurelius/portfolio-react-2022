import React from "react";

// Define the shape of each job entry
interface Job {
	title: string;
	company: string;
	duration: string;
	description: string[];
}

// Sample data typed as an array of Job
const jobs: Job[] = [
	{
		title: "Software Development Engineer",
		company: "Tokyo Electron",
		duration: "Dec 2022 – Present",
		description: [
			"Deliver, maintain, and enhance key features for mission-critical global enterprise web applications.",
			"Designed and implemented a new system status tracking system to manage up and downtime visibility.",
			"Modernized legacy applications by migrating them to cutting-edge frameworks and libraries, significantly improving performance and maintainability.",
			"Proactively identify, troubleshoot, and rapidly resolve critical issues to minimize disruptions and ensure seamless performance.",
			"Work within Agile development methodologies, including Scrum and Kanban.",
			"Primary Technologies: JavaScript, React, Java EE, OutSystems, Boomi, SQL.",
		],
	},
	{
		title: "Contract Software Engineer, Community Mentor",
		company: "100Devs",
		duration: "Jan 2022 – Dec 2022",
		description: [
			"Worked with students to help them learn and grow as developers.",
			"Provided mentorship and guidance to help students build their portfolios.",
			"Developed and maintained web applications for the 100Devs community.",
			"Primary Technologies: JavaScript, React, NextJS, NodeJS, MongoDB, Express.",
		],
	},
	{
		title: "Freelance Software Engineer",
		company: "Self-Employed",
		duration: "Jan 2021 – Present",
		description: [
			"Built, maintained, and enhanced dynamic web applications tailored to diverse client needs.",
			"Collaborated closely with clients to identify requirements, solve critical challenges, and deliver impactful full-stack solutions.",
			"Provided ongoing support and maintenance for existing applications.",
			"Primary Technologies: Javascript, React, NextJS, NodeJS, MongoDB, Express.",
		],
	},
	{
		title: "Community Organizer",
		company: "Code CoOp Austin",
		duration: "Dec 2024 – August 2025",
		description: [
			"Organized and led community events to promote coding and technology education.",
			"Collaborated with local organizations to provide resources and support for underrepresented groups in tech.",
			"Held workshops and training sessions to help individuals learn coding skills.",
		],
	},
];

// Timeline component with typed props and return type
const Timeline: React.FC = (): JSX.Element => {
	return (
		<section
			id="experience"
			className="bg-gradient-to-b to-gray-800 from-black w-full text-white md:h-full pt-8 pb-20 lg:px-12"
		>
			<article className="max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Experience
					</p>
				</div>

				<div className="container z-0 mx-auto px-4 md:px-20 py-12">
					{jobs.map((job, idx) => (
						<div key={idx} className="mb-8 flex items-start">
							{/* Dot centered on the line */}
							<div className="mr-4 flex-shrink-0">
								<div className="bg-accent w-4 h-4 rounded-full border-2 border-white translate-x-2" />
							</div>

							{/* Job content */}
							<div className="pl-2">
								<h3 className="text-xl font-semibold">{job.title}</h3>
								<p className="text-gray-600">{job.company}</p>
								<p className="text-gray-500 text-sm">{job.duration}</p>
								<ul className="mt-2 list-disc list-inside">
									{job.description.map((line, i) => (
										<li key={i} className="text-base">
											{line}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</article>
		</section>
	);
};

export default Timeline;
