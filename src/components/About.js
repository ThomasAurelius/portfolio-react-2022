import React from 'react'

export default function About() {
  return (
    <section name="about" className='w-full h-full bg-gradient-to-b to-gray-800 from-black text-white pb-20 lg:px-12'>   
      <article className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
         <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
         </div>
         <p className='text-xl mt-10'>Ambitious and driven Software Developer focusing on Javascript and React, with a keen interest in Machine Learning and AI. I
          have a strong leadership background and enjoy mentoring other developers, and supporting the dev community. I enjoy the creative process of software development and overcoming new challenges. As a process and personal improvement evangelist, I have a deep belief in the power of leaving everything better than I found it.
         </p>
         <br />
         <p className='text-xl'>In my daily life, I am a father of two amazing teenagers, as well as a dog
						dad to a wonderfully sweet Dachshund. I enjoy gardening, playing board, card and video games, painting miniatures as well
						as reading, and tinkering with electronics.</p>
      </article>    
    </section>
  )
}
