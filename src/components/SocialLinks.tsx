import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";

interface LinkItem {
	id: number;
	child: React.ReactNode;
	href: string;
	style?: string;
	download?: boolean;
}

export default function SocialLinks(): JSX.Element {
	const links: LinkItem[] = [
		{
			id: 1,
			child: (
				<>
					<span>LinkedIn </span>
					<FaLinkedin size={30} />
				</>
			),
			href: "https://www.linkedin.com/in/thomasgooch/",
			style: "rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					<span>Github </span>
					<FaGithub size={30} />
				</>
			),
			href: "https://github.com/ThomasAurelius",
		},
		{
			id: 4,
			child: (
				<>
					<span>Instagram </span>
					<FaInstagram size={30} />
				</>
			),
			href: "https://instagram.com/thomasofaurelius",
		},
		{
			id: 5,
			child: (
				<>
					<span>Mail </span>
					<HiOutlineMail size={30} />
				</>
			),
			href: "mailto:thomas.e.gooch@gmail.com",
		},
		{
			id: 6,
			child: (
				<>
					<span>Schedule </span>
					<AiOutlineSchedule size={30} />
				</>
			),
			href: "https://calendly.com/thomas-e-gooch",
		},
		{
			id: 7,
			child: (
				<>
					<span>Resume </span>
					<BsFillPersonLinesFill size={30} />
				</>
			),
			href: "https://thomasgooch.dev/Thomas+E.+Gooch+Resume+05052025.pdf",
			style: "rounded-br-md",
			download: true,
		},
	];

	return (
		<section className="hidden lg:flex flex-col top-[35%] left-0 fixed">
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className={`flex justify-between items-center w-36 h-12 px-3 bg-accent ml-[-90px] hover:ml-[-1px] hover:rounded-md duration-300 ${
							style || ""
						}`}
					>
						<a
							href={href}
							className="flex justify-between items-center text-white w-full"
							download={download}
							target="_blank"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
