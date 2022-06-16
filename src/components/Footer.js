import React from 'react'
import github from '../assets/github_icon.png'
import linkedin from '../assets/linkedin_icon.png'
import codewars from '../assets/codewars_icon.png'
import codepen from '../assets/codepen_icon.png'

export default function Footer() {
  return (
    <div>   
      <div class="footer bg-gradient-to-b from-gray-800 to-black text-white">

				<h3 className='font-bold text-2xl'>Contact me!</h3>
				<a href="mailto:thomas.aurelius.widmer@gmail.com" className="footer_link text-2xl">thomas.aurelius.widmer@gmail.com</a>
				<ul className="social-list my-4">
					<li className="social-list_item">
						<a className="social-list_link" href="https://www.codewars.com/users/ThomasAurelius" target="_blank" rel="noreferrer">
							<img className="social_list_img" src={codewars} alt="" />
						</a>
					</li>
					<li className="social-list_item">
						<a className="social-list_link" href="https://codepen.io/ThomasAurelius/" target="_blank" rel="noreferrer">
							<img className="social_list_img" src={codepen} alt="" />
						</a>
					</li>
									
					<li className="social-list_item">
						<a className="social-list_link" href="https://www.linkedin.com/in/thomasgooch/" target="_blank" rel="noreferrer">
							<img className="social_list_img" src={linkedin} alt="" />
						</a>
					</li>
					<li className="social-list_item">
						<a className="social-list_link" href="https://github.com/ThomasAurelius" target="_blank"rel="noreferrer">
							<img className="social_list_img" src={github} alt="" />
						</a>
					</li>
				</ul>

				<div className="final">
					<small><span>&copy;</span> Design by: <strong>Thomas Aurelius</strong></small>
				</div>
			</div>
    
    </div>
  )
}
