import React from 'react'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>   
      <article class="footer bg-gradient-to-b to-gray-800 from-black text-white  lg:px-12">

			<h3 className='font-bold'>Contact me!</h3>
			<a href="mailto:thomas.e.gooch@gmail.com" className="footer_link  md:text-2xl ">thomas.e.gooch@gmail.com</a>
			<ul className="social-list my-4">
				<li className="social-list_item">
					<a className="social-list_link" href="https://www.codewars.com/users/ThomasAurelius" target="_blank" rel="noreferrer">
						<SiCodewars size={40} />
					</a>
				</li>
				<li className="social-list_item md:px-4">
					<a className="social-list_link" href="https://thomasgooch.dev/thomas_gooch_resume_110722.pdf"  download={true} rel="noreferrer">
						<BsFillPersonLinesFill size={40} />
					</a>
				</li>									
				<li className="social-list_item">
					<a className="social-list_link" href="https://www.linkedin.com/in/thomasgooch/" target="_blank" rel="noreferrer">
						<FaLinkedin size={40} />
					</a>
				</li>
				<li className="social-list_item md:px-4">
					<a className="social-list_link" href="https://github.com/ThomasAurelius" target="_blank"rel="noreferrer">
						<FaGithub size={40} />
					</a>
				</li>
				<li className="social-list_item">
					<a className="social-list_link" href="https://instagram.com/thomasofaurelius" target="_blank"rel="noreferrer">
						<FaInstagram size={40} />
					</a>
				</li>
			</ul>

			<div className="final">
				<small><span>&copy;</span> <strong> Thomas Gooch / Thomas Aurelius </strong></small>
			</div>
		</article>
    
    </footer>
  )
}
