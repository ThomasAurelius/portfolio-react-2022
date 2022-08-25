import React from 'react'
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
import mongo from '../assets/mongodb.svg'
import mui from '../assets/MUI.svg'

export default function Experience() {

   const technologies = [
      
      {
         id: 3,
         src: javascript,
         alt: "Javascript badge",
         title: "Javascript",
         style: 'shadow-yellow-500',
      },
      {
         id: 4,
         src: reactImg,
         alt: "React badge",
         title: "React",
         style: 'shadow-blue-600'
      },
      {
         id: 14,
         src: mui,
         alt: "Material UI badge",
         title: "Material UI",
         style: 'shadow-blue-400'
      },
      {
         id: 5,
         src: tailwind,
         alt: "Tailwind badge",
         title: "Tailwind",
         style: 'shadow-sky-400'
      },
      {
         id: 12,
         src: sass,
         alt: "Sass badge",
         title: "Sass",
         style: 'shadow-pink-400'
      },
      {
         id: 1,
         src: html,
         alt: "HTML5 badge",
         title: "HTML",
         style: 'shadow-orange-500'
      },
      {
         id: 2,
         src: css,
         alt: "CSS3 badge",
         title: "CSS",
         style: 'shadow-blue-500'
      },
      {
         id: 8,
         src: github,
         alt: "Github badge",
         title: "Git & Github",
         style: 'shadow-gray-400'
      },
      {
         id: 6,
         src: nextjs,
         alt: "Next.js badge",
         title: "Next.js",
         style: 'shadow-white'
      },
      {
         id: 7,
         src: graphql,
         alt: "Graph QL badge",
         title: "Graph QL",
         style: 'shadow-pink-600'
      },
      
      {
         id: 9,
         src: node,
         alt: "NodeJS badge",
         title: "NodeJs",
         style: 'shadow-green-300'
      },
      {
         id: 10,
         src: express,
         alt: "Express badge",
         title: "Express",
         style: 'shadow-gray-400'
      },
      {
         id: 11,
         src: apollo,
         alt: "Apollo badge",
         title: "Apollo",
         style: 'shadow-blue-800'
      },
      {
         id: 13,
         src: mongo,
         alt: "MongoDB badge",
         title: "MongoDB",
         style: 'shadow-green-600'
      },
      
   ]

  return (
    <section name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full text-white  lg:px-12'>   
      <article className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
         <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Technology</p>
            <p className='py-6'>These are the primary technologies that I work with, but I am always learning and looking to add new technologies to my experience.</p>
         </div>   

         <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
         {technologies.map(({ id, src, alt, title, style}) => (
            <div 
               key={id} 
               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <img className='w-20 mx-auto' src={src} alt={alt} />
                  <p className='mt-4'>{title}</p>
            </div>
         ))}
            
         </div> 
      </article>    
    </section>
  )
}
