import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <section name="home" className='h-full h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20  lg:px-12 md:pt-60 text-center md:text-right' >
      <article className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row xs:text-center'>
         <div className='flex flex-col justify-center  h-full'>
            <h2 className='text-4xl sm:text-6xl px-4 font-bold text-white text-center'>
            
            <Typewriter
               options={{
                  strings: ['Full-Stack Web Developer', 'Front-End Web Developer', 'Miracle Technologist'],
                  autoStart: true,
                  loop: true,
               }}
               />
                           
            
            
            </h2>
            <p className='text-gray-500 py-4 px-4 max-w-xlg self-center text-center text-2xl'>I create unique and modern web experiences using the internets most powerful and proven technologies. From front-end splash pages, to full featured database driven applications, I can deliver a world class experience for your audience. </p>
            
            <div className="self-center">
               <Link to={'portfolio'} smooth duration={500}>
               <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md accent-color cursor-pointer md:mb-40 '>
               Portfolio
               <span className='group-hover:rotate-90 duration-300 pl-1'>
                  <BsArrowRight size={20} className='ml-1' />
               </span>               
            </button>
            </Link>
            </div>
         </div>
         <div>
  {/*
            <img src={heroImg} alt="Thomas Aurelius" className='rounded-2xl mx-auto w-2/3 md:w-full mb-2' />
  */}
         </div>
      </article>      
    </section>
  )
}
