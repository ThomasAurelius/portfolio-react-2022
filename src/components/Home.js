import React from 'react'
import heroImg from '../assets/heroimg.jpg'
import { BsArrowRight } from 'react-icons/bs'


export default function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-60' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row xs:text-center'>
         <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rerum perferendis aut tenetur beatae, delectus necessitatibus ut. Quam, dolorum incidunt?</p>
            <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
               Portfolio 
               <span className='group-hover:rotate-90 duration-300 pl-1'>
                  <BsArrowRight size={20} className='ml-1' />
               </span>
            </button>
            </div>
         </div>
         <div>
            <img src={heroImg} alt="Thomas Aurelius" className='rounded-2xl mx-auto w-2/3 md:w-full mb-80' />
         </div>
      </div>
      
    </div>
  )
}
