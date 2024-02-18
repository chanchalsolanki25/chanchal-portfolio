import React, { useState, useEffect } from 'react'

function About() {
  return (
      // About section
      <div id='about' className='h-full w-full'>
        {/* for top extra space */}
        <p className='xl:h-[4rem] h-[3rem] relative z-50 bg-light'></p>
        {/* Outer main section */}
      <div className=' lg:py-[72px] sm:py-[50px] py-[20px] lg:px-[100px] sm:px-[50px] px-[20px] bg-transparent bottom-0 relative z-50'>
        {/* Inner section */}
        <div className='md:flex block h-auto items-center border-r-4 border-b-4 border-yellow lg:p-10 p-6 bg-light shadow-2xl rounded-lg'>
          {/* Picture section */}
          <div className='basis-[50%] h-[400px]'>
            <img className='h-full w-full object-cover' src="./img/chanchal.jpg" alt="Chanchal Kumari" loading='lazy' />
          </div>
          {/* About me section */}
          <div className='basis-[50%] h-full lg:pl-20 ms:pl-12 md:pl-6 pl-0 md:pt-auto pt-6'>
            <h2 className='xl:text-4xl sm:text-2xl text-lg font-extralight lg:mb-10 mb-4 text-yellow'>About <span className='font-extrabold'>Me
            </span>
            </h2>
            <div className=' h-auto' style={{ fontFamily: 'Poppins, sans-serif' }}>
              <p>
                {/* <span className='font-extrabold'>
                </span> */}
                I am a qualified Post Graduate professional with qualitative knowledge and experience in Frontend web Applications using React. Proficient in leveraging the power of the React library to build dynamic and responsive web applications. My experience specifically in developing the website layouts using HTML5, CSS3, Bootstrap, PrimeReact and Tailwind CSS. Successfully completed multiple projects, demonstrating a fair understanding of React concepts and best practices with Webanix Solutions.
              </p>
            </div>
            <button className='lg:mt-10 mt-4 lg:py-4 p-3 lg:px-8 bg-yellow md:text-auto text-sm text-white hover:bg-darkyellow  rounded-sm font-bold box-border'>
              <a href='.\resume\CV_Chanchal Kumari.pdf' download className='lg:py-4 p-3 lg:px-8'>Download my CV</a>
            </button>
          </div>
        </div>
      </div>
      </div>

  )
}

export default About
