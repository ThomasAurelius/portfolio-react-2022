import React from 'react'

import { FaGithub, FaLinkedin, FaInstagram, FaCodepen } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si';

export default function Footer() {
  return (
    <div>   
      <div class="footer bg-gradient-to-b from-gray-800 to-black text-white  lg:px-12">

				<h3 className='font-bold'>Contact me!</h3>
				<a href="mailto:thomas.e.gooch@gmail.com" className="footer_link  md:text-2xl ">thomas.e.gooch@gmail.com</a>
				<ul className="social-list my-4">
					
													
					<li className="social-list_item">
						<a className="social-list_link" href="https://www.linkedin.com/in/thomasgooch/" target="_blank" rel="noreferrer">
							<FaLinkedin size={50} />
						</a>
					</li>
					<li className="social-list_item md:px-4">
						<a className="social-list_link" href="https://github.com/ThomasAurelius" target="_blank"rel="noreferrer">
							<FaGithub size={50} />
						</a>
					</li>
					<li className="social-list_item">
						<a className="social-list_link" href="https://instagram.com/thomasofaurelius" target="_blank"rel="noreferrer">
							<FaInstagram size={50} />
						</a>
					</li>
				</ul>

				<div className="final">
					<small><span>&copy;</span> <strong>Thomas Gooch </strong></small>
				</div>
			</div>
    
    </div>
  )
}
