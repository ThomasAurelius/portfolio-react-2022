import React from 'react'
import space from '../assets/fm_space_landscape.png'
import insure from '../assets/fm_insure_landscape.png'
import dine from '../assets/fm_dine_landscape.png'
import blogr from '../assets/fm_blogr_landscape_thumbnail.png'
import shoes from '../assets/shoes-landscape.png'
import malarki from '../assets/malarki-landscape.png'

export default function Portfolio() {

   const portfolios = [
      {
         id: 1,
         src: space,
         alt: "Space Tourism Website",
         code: "",
         live: ""
      },
      {
         id: 2,
         src: insure,
         alt: "Example Insurance Website",
         code: "",
         live: ""
      },
      {
         id: 3,
         src: dine,
         alt: "Example Restaurant Website",
         code: "",
         live: ""
      },
      {
         id: 4,
         src: blogr,
         alt: "Example Blog Website",
         code: "",
         live: ""
      },
      {
         id: 5,
         src: shoes,
         alt: "Example Shoes Website",
         code: "",
         live: ""
      },
      {
         id: 6,
         src: malarki,
         alt: "Example Software Website",
         code: "",
         live: ""
      }
   ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pt-8'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
         <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
            <p className='py-6'>Check out some of my latest work:</p>
         </div>
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 m-1' >

         {
            portfolios.map(({ id, alt,  src, code, live }) => (
               
                  <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                     <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105'/>
                     <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'><a href={live}>Live Demo</a></button>
                        <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'><a href={code}>Source Code</a></button>
                     </div>
                  </div>
               
               ))
            }
         </div>
         
      </div>
    </div>
  )
}
