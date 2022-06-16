import React from 'react'

export default function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  lg:px-12'>   
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
         <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4'>About</p>
         </div>
         <p className='text-xl mt-10'>Ambitious and driven Software Developer focusing on Javascript and React, with a keen interest in Machine Learning and AI. I
          have a strong leadership background and enjoy mentoring other developers, and supporting the dev community. I enjoy the creative process of software development and overcoming new challenges. I am a process and personal improvement evangelist, with a deep belief in the power of leaving everything better than I found it.
         </p>
         <br />
         <p className='text-xl'>In my daily life, I am a father of two amazing teenagers, as well as a dog
						dad to a wonderfully sweet Dachshund. I enjoy gardening, playing board, card and video games, painting miniatures as well
						as reading, and tinkering with electronics.</p>
      </div>
    
    </div>
  )
}
