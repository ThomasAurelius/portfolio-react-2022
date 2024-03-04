import React from 'react'

export default function About() {
  return (
    <section name="about" className='w-full h-full bg-gradient-to-b to-gray-800 from-black text-white pb-20 lg:px-12'>   
      <article className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  '>
         <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
         </div>
         <p className='text-2xl mt-10 leading-9'>I am a Full Stack Software Developer, focusing on Java EE, MongoDB, Express, React and NodeJS. I am passionate about clean UI and intuitive user experiences. I have a strong leadership background and enjoy mentoring other developers, and supporting the dev community. As a process improvement evangelist, I deeply believe in the power of leaving everything better than I found it, especially code. 
         
         </p>
         <br />
         <p className='text-2xl mt-5 leading-9'>In my daily life, I am a father of two amazing teenagers, as well as a dog dad to 2 wonderfully sweet Dachshunds, named Jackson, and Bernie. I enjoy gardening, gaming(board, card  and console), painting miniatures as well
						as reading, and tinkering with electronics.</p>
            <br />
            <p className='text-2xl mt-5 leading-9 inline'>I am currently very happily employed and not looking for full time opportunities. I am open for select freelance opportunities that pique my interest and provide a challenge.</p>
      </article>    
    </section>
  )
}
