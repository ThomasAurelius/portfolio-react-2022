import React from 'react'

const Unavailable = () => {
  return (
    <div>
    <section name="home" className='home-section h-full w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20  lg:px-12 md:pt-60 text-center md:text-right' >
      <article className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row xs:text-center'>
         <div className='flex flex-col justify-center h-full'>
         <h1 className='text-center text-6xl pb-3'>Unavailable</h1>
           
            <p className='text-gray-400 py-4 px-4 max-w-xlg self-center text-center sm:text-3xl text-2xl '>Source code for this project is not available as per terms of the contract.</p>
            
            
         </div>
         <div>
  
  
         </div>
      </article>      
    </section>
    
    </div>
  )
}

export default Unavailable