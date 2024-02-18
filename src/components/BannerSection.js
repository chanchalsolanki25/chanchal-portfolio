import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function BannerSection() {
    const handleNavigation = (e, id) => {
        e.preventDefault();
        const ele = document.getElementById(id)
        ele?.scrollIntoView({ behavior: 'smooth' });

    };
    return (
        <div id="home" className='w-[100%] md:h-[100vh] h-[60vh] relative box-border'>
            {/* Background image */}
            <img src='.\img\pexels-julia-m-cameron-4144923.jpg' alt='Chanchal Kumari' loading='lazy' className='w-full h-full z-[-1] fixed top-0 left-0 bottom-0 right-0' />
            <div className='w-full h-full fixed top-0 left-0 right-0 z-20 opacity-40 bg-black'>
            </div>
            {/* Card */}
            <div className='md:w-[50%] sm:w-[60%] xsm:w-[70%] w-[80%] xl:p-10 md:p-8 sm:p-6 p-4 flex flex-col justify-center bg-light absolute left-[50%] top-[50%] z-40 text-center translate-x-[-50%] translate-y-[-32%]'>
                <p className='xl:text-4xl sm:text-2xl text-lg text-yellow uppercase tracking-widest' style={{ fontFamily: 'Bebas Neue, sans-serif' }}>A Frontend Developer
                </p>
                <h1 className='xl:text-6xl lg:text-4xl sm:text-3xl text-xl xl:my-4 sm:my-2 my-[2px] font-extrabold' style={{ fontFamily: 'Poppins, sans-serif ' }}> Chanchal Kumari
                </h1>
                <div
                    className='bg-yellow text-white py-2 text-center sm:mt-3 mt-2 xl:w-[30%] lg:w-[40%] sm:w-[45%] w-[50%] m-auto flex justify-evenly items-center lg:text-auto sm:text-sm text-[10px]'>
                    <a href='#about' className='uppercase' onClick={(e) => handleNavigation(e, 'about')}>More about me</a>
                    <FaArrowRight />
                </div>
            </div>

        </div>
    )
}

export default BannerSection
