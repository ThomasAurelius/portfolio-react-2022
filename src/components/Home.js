import React from 'react'
import heroImg from '../assets/ta-01.png'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-scroll'


export default function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-40  lg:px-12 md:pt-40 text-right' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row xs:text-center'>
         <div className='flex flex-col justify-center  h-full'>
            <h2 className='text-4xl sm:text-7xl px-4 font-bold text-white'>I am a Full Stack Web Developer</h2>
            <p className='text-gray-500 py-4 px-4 max-w-md self-end'>I create unique and modern web experiences using the web's most powerful and proven technologies. My webpages and applications employ modern design principles, with cutting edge SEO technology and enhanced accessibility behind the scenes. </p>
            <div className="self-center">
               <Link to={'portfolio'} smooth duration={500}>

            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md accent-color cursor-pointer  '>
               Portfolio
               <span className='group-hover:rotate-90 duration-300 pl-1'>
                  <BsArrowRight size={20} className='ml-1' />
               </span>
               
            </button>
            </Link>
            </div>
         </div>
         <div>
            <img src={heroImg} alt="Thomas Aurelius" className='rounded-2xl mx-auto w-2/3 md:w-full mb-2' />
         </div>
      </div>
      
    </div>
  )
}
