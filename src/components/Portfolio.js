import React from 'react'
import space from '../assets/fm_space_landscape.png'
import insure from '../assets/fm_insure_landscape.png'
import dine from '../assets/fm_dine_landscape.png'
import blogr from '../assets/fm_blogr_landscape_thumbnail.png'
import loop from '../assets/fm_loop_landscape.png'
import malarki from '../assets/malarki-landscape.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import reactImg from '../assets/react.png'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import apollo from '../assets/apollo.png'
import sass from '../assets/sass.png'

export default function Portfolio() {

   const portfolios = [
      {
         id: 1,
         src: space,
         alt: "Space Tourism Website",
         code: "https://github.com/ThomasAurelius/fm_react_space_tourism",
         live: ""
      },
      {
         id: 2,
         src: insure,
         alt: "Example Insurance Website",
         code: "https://github.com/ThomasAurelius/fm_insure-landing-page-master",
         live: "https://thomasaurelius.github.io/fm_insure-landing-page-master/"
      },
      {
         id: 3,
         src: dine,
         alt: "Example Restaurant Website",
         code: "https://github.com/ThomasAurelius/fm_dine-restaurant-website",
         live: "https://thomasaurelius.github.io/fm_dine-restaurant-website/"
      },
      {
         id: 4,
         src: blogr,
         alt: "Example Blog Website",
         code: "https://github.com/ThomasAurelius/fm_blogr-landing-page-main",
         live: "https://thomasaurelius.github.io/fm_blogr-landing-page-main/"
      },
      {
         id: 5,
         src: loop,
         alt: "Example Loopstudios Website",
         code: "https://github.com/ThomasAurelius/fm_loopstudios-landing-page-main",
         live: "https://thomasaurelius.github.io/fm_loopstudios-landing-page-main/"
      },
      {
         id: 6,
         src: malarki,
         alt: "Example Software Website",
         code: "https://github.com/ThomasAurelius/malarki",
         live: "https://thomasaurelius.github.io/malarki/"
         
      }
   ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pt-8  lg:px-12'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
         <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
            <p className='py-6'>Check out some of my latest work:</p>
         </div>
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 m-1' >

         {
            portfolios.map(({ id, alt,  src, code, live, icons }) => (
               
                  <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                     <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105'/>
                     <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-0 m-1 duration-200 hover:scale-105'><a href={live}>Live Demo</a></button>
                        <button className='w-1/2 px-6 py-0 m-1 duration-200 hover:scale-105'><a href={code}>Source Code</a></button>
                        
                     </div>
                  </div>
               
               ))
            }
         </div>
         
      </div>
    </div>
  )
}
