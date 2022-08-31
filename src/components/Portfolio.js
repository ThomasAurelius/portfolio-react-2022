import React from 'react'
import space from '../assets/fm_space_landscape.png'
import insure from '../assets/fm_insure_landscape.png'
import dine from '../assets/fm_dine_landscape.png'
import expense from '../assets/react_expense_tracker_landscape.png'
import loop from '../assets/fm_loop_landscape.png'
import malarki from '../assets/malarki-landscape.png'
import webstore from '../assets/webstore_landscape.png'


export default function Portfolio() {

   const portfolios = [
      {
         id: 10,
         src: webstore,
         alt: "Full Stack NextJS Webstore",
         code: "https://github.com/ThomasAurelius/ecommerce",
         live: "https://ecommerce-zeta-three.vercel.app/"
      },
      {
         id: 11,
         src: expense,
         alt: "React Expense Tracker",
         code: "https://github.com/ThomasAurelius/react-expense-tracker",
         live: "https://react-expense-tracker-omega.vercel.app/"
      },
      {
         id: 1,
         src: space,
         alt: "Space Tourism Website",
         code: "https://github.com/ThomasAurelius/fm_space-tourism-website-main",
         live: "https://thomasaurelius.com/projects/space/index.html"
      },
      {
         id: 3,
         src: dine,
         alt: "Responsive Restaurant Website",
         code: "https://github.com/ThomasAurelius/fm_dine-restaurant-website",
         live: "https://thomasaurelius.github.io/fm_dine-restaurant-website/"
      },
            {
         id: 5,
         src: loop,
         alt: "Responsive VR Service Website",
         code: "https://github.com/ThomasAurelius/fm_loopstudios-landing-page-main",
         live: "https://thomasaurelius.github.io/fm_loopstudios-landing-page-main/"
      },
      {
         id: 6,
         src: malarki,
         alt: "Responsive Software Website",
         code: "https://github.com/ThomasAurelius/malarki",
         live: "https://thomasaurelius.github.io/malarki/"
         
      }
   ]

  return (
    <section name="portfolio" className='bg-gradient-to-b to-black from-gray-800 w-full text-white md:h-full  pt-8 pb-20 lg:px-12'>
      <article className='max-w-screen-lg p-4 pt-10 mx-auto flex flex-col justify-center w-full h-full '>
         <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>            
         </div>
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm: px-2  md:px-8 m-1' >

         {
            portfolios.map(({ id, alt,  src, code, live, icons }) => (
               
                  <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                     <div>
                        <p className=''>{alt}</p>
                        <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                           <button className='w-1/2 px-6 py-0 m-1 duration-200 hover:scale-105'><a href={live}>Live Demo</a></button>
                           <button className='w-1/2 px-6 py-0 m-1 duration-200 hover:scale-105'><a href={code}>Source Code</a></button>
                        </div>
                     </div>
                  </div>               
               ))
            }
         </div>         
      </article>
    </section>
  )
}
