import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (): JSX.Element => {
	return (
		<footer>
			<article className="footer bg-gradient-to-b to-gray-800 from-black text-white lg:px-12">
				<h3 className="font-bold">Contact me!</h3>
				<a
					href="mailto:thomas.e.gooch@gmail.com"
					className="footer_link md:text-2xl"
				>
					thomas.e.gooch@gmail.com
				</a>
				<ul className="social-list my-4">
					<li className="social-list_item md:px-4">
						<a
							className="social-list_link"
							href="https://thomasgooch.dev/Thomas+E.+Gooch+Resume+10252025.pdf"
							download={true}
							rel="noreferrer"
						>
							<BsFillPersonLinesFill size={40} />
						</a>
					</li>
					<li className="social-list_item">
						<a
							className="social-list_link"
							href="https://www.linkedin.com/in/thomasgooch/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin size={40} />
						</a>
					</li>
					<li className="social-list_item md:px-4">
						<a
							className="social-list_link"
							href="https://github.com/ThomasAurelius"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub size={40} />
						</a>
					</li>
					<li className="social-list_item">
						<a
							className="social-list_link"
							href="https://instagram.com/thomasofaurelius"
							target="_blank"
							rel="noreferrer"
						>
							<FaInstagram size={40} />
						</a>
					</li>
					<li className="pl-1 md:pl-4 social-list_item">
						<a
							className="social-list_link"
							href="https://calendly.com/thomas-e-gooch"
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineSchedule size={40} />
						</a>
					</li>
				</ul>

				<div className="final">
					<small>
						<span>&copy; 2025</span>
					</small>
				</div>
			</article>
		</footer>
	);
};

export default Footer;
