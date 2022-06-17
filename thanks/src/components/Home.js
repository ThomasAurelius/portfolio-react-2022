import React from 'react'

import { BsArrowRight } from 'react-icons/bs'



export default function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-40  lg:px-12 md:pt-40 text-right' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row xs:text-center'>
         <div className='flex flex-col justify-center  h-full'>
            <h2 className='text-4xl sm:text-7xl px-4 font-bold text-white'>Thank you for contacting me!</h2>
            <p className='text-gray-500 text-2xl py-4 px-4 max-w-md self-end'>I will be in touch shortly!</p>
            <div className="self-center">
               <a href="https://thomasaurelius.com/">

                  <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md accent-color cursor-pointer  '>
                     Home
                     <span className='group-hover:rotate-90 duration-300 pl-1'>
                        <BsArrowRight size={20} className='ml-1' />
                     </span>
                     
                  </button>
            </a>
            </div>
         </div>
       
      </div>
      
    </div>
  )
}
