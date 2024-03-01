import React from 'react'

const Calendar = () => {
  return (
    <div>
      <section name="calendar" className='bg-gradient-to-b from-gray-800 to-black w-full h-full text-white  lg:px-12'>   
      <article className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
         <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Avaibility</p>
            <p className='py-6'>I am available for coffee chats from fellow developers, project consultations, and interviews.</p>
            <p className='py-6'>I am currently happy with my situation and not available for full time employment.</p>
            <p className='py-6'>I am available for select freelance opportunities that pique my interest and provide a challenge.</p>
            <p className='py-6'><a href="https://calendly.com/thomas-e-gooch" target="_blank" rel="noreferrer" className='text-blue-400 hover:text-blue-600'>Click here to schedule a meeting with me.</a>
            </p>
         </div>   

         <div className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center py-8 px-12 sm:px-0'>
         
            
         </div> 
      </article>    
    </section>
    </div>
  )
}

export default Calendar