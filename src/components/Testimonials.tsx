import React from "react";
import sierra from "../assets/sierra1.jpg";
import issac from "../assets/issac1.jpg";
import juan from "../assets/juan1.jpg";
import amie from "../assets/amie2.jpg";

export default function Testimonials(): JSX.Element {
	return (
		<div className="w-full h-full bg-gradient-to-b to-gray-800 from-black p-4 text-white  lg:px-12">
			<article
				id="testimonials"
				className="max-w-screen-lg p-2 md:p-4 pt-10 mx-auto flex flex-col justify-center  h-full "
			>
				<div>
					<p className="text-4xl font-bold inline border-b-4  border-gray-500">
						Testimonials
					</p>
				</div>
				<div className="flex pt-8 flex-col md:flex-row justify-center items-center gap-8 p-2 md:p-4">
					<figure className="w-[100px] mb-4 d-flex align-items-center justify-content-center">
						<div>
							<img
								src={sierra}
								alt="Sierra Smith"
								className="w-[100px] rounded-full img-fluid mb-3"
							/>
						</div>
						<p className="text-2xl">Seirra Smith</p>
					</figure>
					<blockquote className="w-[75%] mb-5">
						<p className="text-xl">
							&ldquo;I already had a couple of sites built that I needed
							merged under one business name and website. Thomas took my
							sites, colors, logo, etc. and merged them together
							beautifully in one, simple to use website. He listened to
							my needs and even suggested other web hosts, appointment
							apps, etc. that would work for my intended purpose. He was
							extremely patient with my long response times as I was also
							going through a tough personal matter at the time. He was
							open and asked for honest feedback every step of the way. I
							could easily share what I liked and didn't like without
							fear of offending. He truly cares that you're happy with
							his work and your website. He was also dependable and
							affordable for a micro business such as myself. Thanks
							again Thomas!&rdquo;
						</p>
					</blockquote>
				</div>
				<div className="flex  flex-col md:flex-row justify-center items-center gap-8 p-4">
					<figure className="w-[100px] mb-4 d-flex align-items-center justify-content-center">
						<div>
							<img
								src={issac}
								alt="Issac Davis"
								className="w-50 rounded-full img-fluid mb-3"
							/>
						</div>
						<p className="text-2xl">Issac Davis</p>
					</figure>
					<blockquote className="w-[75%] mb-5">
						<p className="text-xl">
							&ldquo;I had the honor of working on a couple of Thomas’s
							development teams. Thomas is an incredible leader, both
							patient, and an all around mentor. If anyone needed
							material explained, or a quick reference for best industry
							practices he was the person to go to. His project
							management approach is clearly articulated with a focus on
							collaboration, and business needs in perspective. He
							happily shared creative solutions to challenges we all
							faced. Supporting each team members personal growth. Thomas
							helped create an inclusive environment that felt nothing
							short of "the place to be."&rdquo;
						</p>
					</blockquote>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4">
					<figure className="w-[100px] mb-4 d-flex align-items-center justify-content-center">
						<div>
							<img
								src={juan}
								alt="Juan Silva"
								className="w-50 rounded-full img-fluid mb-3 "
							/>
						</div>
						<p className="text-2xl">Juan Silva</p>
					</figure>
					<blockquote className="w-[75%] mb-5">
						<p className="text-xl">
							&ldquo;I had the pleasure of meeting and working with
							Thomas. Thomas lead our team in a very efficient way
							allowing us to deliver the products on time with higher
							quality than expected. I saw firsthand how he mentored Jr
							members of the team. Thomas is an amazing human being and I
							would love to work with him in the future!&rdquo;
						</p>
					</blockquote>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4">
					<figure className="w-[100px] mb-4 d-flex align-items-center justify-content-center">
						<p className="text-2xl">Steve Sessa, Executive Director</p>
					</figure>
					<blockquote className="w-[75%] mb-5">
						<p className="text-xl">
							&ldquo;Willamette Valley Water Polo had Thomas Gooch build
							our new website for players to register and gather
							information about the programs we offer. We had worked with
							a few other web developers in the past and Thomas was far
							and away the best and easiest to work and communicate with.
							He was fast to respond to questions and corrections and in
							the end developed a fully functioning website that provides
							our community exactly what we were looking for and his
							continued support is priceless.&ldquo;
						</p>
					</blockquote>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4">
					<figure className="w-[100px] mb-4 d-flex align-items-center justify-content-center">
						<div>
							<img
								src={amie}
								alt="Amie Parsons"
								className="w-[100px] rounded-full img-fluid mb-3"
							/>
						</div>
						<p className="text-2xl">Amie Parsons</p>
					</figure>
					<blockquote className="w-[75%] mb-5">
						<p className="text-xl">
							&ldquo;Thomas was great to work with! He was super patient
							with me and allowed me to take my time figuring out my
							image. He cares and wants me to be happy with my website.
							He goes above and beyond even updating my contact page
							because he thought it would run better than before!&ldquo;
						</p>
					</blockquote>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 p-2 md:p-4">
					<figure className="w-[100px] mb-4 d-flex align-items-center justify-content-center">
						<p className="text-2xl">Jason Harding, Co-Founder</p>
					</figure>
					<blockquote className="w-[75%] mb-5">
						<p className="text-xl">
							&ldquo;My partner and I approached Thomas to make a proof
							of concept for our application idea. Thomas knocked it out
							of the park, delivering a full working MVP, in under the
							time frame we were quoted, and even talked us through a
							couple enhancements and UI improvements that we had not
							thought of.&ldquo;
						</p>
					</blockquote>
				</div>
			</article>
		</div>
	);
}
