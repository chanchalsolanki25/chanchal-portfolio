import React from 'react'
import image from '../img/chanchal.jpg'

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
            <img className='h-full w-full object-cover' src={image} alt="Chanchal Kumari" loading='lazy' />
          </div>
          {/* About me section */}
          <div className='basis-[50%] h-full lg:pl-20 ms:pl-12 md:pl-6 pl-0 md:pt-auto pt-6'>
            <h2 className='xl:text-4xl sm:text-2xl text-lg font-extralight lg:mb-10 mb-4 text-yellow'>About <span className='font-extrabold'>Me
            </span>
            </h2>
            <div className=' h-auto text-justify' style={{ fontFamily: 'Poppins, sans-serif' }}>
              <p>
                {/* <span className='font-extrabold'>
                </span> */}
                Diligent front-end developer with 2 years of comprehensive experience
                in creating custom websites, skilled in developing user interfaces.
                Enthusiastic about learning and development with a desire to apply skills
                on a variety of projects.
                <strong></strong>
              </p>
            </div>
            <button className='lg:mt-10 mt-4 lg:py-4 p-3 lg:px-8 bg-yellow md:text-auto text-sm text-white hover:bg-darkyellow  rounded-sm font-bold box-border'>
              <a href='.\resume\Chanchal Kumari_CV.pdf' download className='lg:py-4 p-3 lg:px-8'>Download my CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
