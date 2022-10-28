import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si';

export default function SocialLinks() {

const links = [
   {
      id: 1,
      child: (
         <> LinkedIn <FaLinkedin size={30} />  
         </>
      ),
      href: 'https://www.linkedin.com/in/thomasgooch/',
      style: 'rounded-tr-md'
   },
   {
      id: 2,
      child: (
         <> Github <FaGithub size={30} />  
         </>
      ),
      href: 'https://github.com/ThomasAurelius',
   },
   {
      id: 3,
      child: (
         <> Codewars <SiCodewars size={30} />  
         </>
      ),
      href: 'https://www.codewars.com/users/ThomasAurelius'
   },
   {
      id: 4,
      child: (
         <> Instagram <FaInstagram size={30} />  
         </>
      ),
      href: 'https://instagram.com/thomasofaurelius'
   },
   {
      id: 5,
      child: (
         <> Mail <HiOutlineMail size={30} />  
         </>
      ),
      href: 'mailto:thomas.aurelius.widmer@gmail.com'
   },
   
   {
      id: 6,
      child: (
         <> Resume <BsFillPersonLinesFill size={30} />  
         </>
      ),
      href: 'https://thomasgooch.dev/thomas_gooch_resume_091622.pdf',
      style: 'rounded-br-md',
      download: true,
   }
]

  return (
    <section className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
      {links.map(({ id, child, href, style, download }) => (
         <li key={id}
            className={"flex justify-between items-center w-36 h-12 px-3 bg-accent ml-[-90px] hover:ml-[-1px] hover:rounded-md duration-300" + " " + style}>
            <a href={href} 
               className='flex justify-between items-center text-white w-full'
               download={download}
               target='_blank'
               rel='noreferrer'
            >
               {child}
            </a>
         </li>
      ))}       
      
      </ul>
   </section>
  );
}
