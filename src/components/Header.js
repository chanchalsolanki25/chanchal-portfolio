import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';

function Header() {
  const [element, setElement] = useState('home');
  const [isHeader, setIsHeader] = useState(false);
  const navMenu = ['home', 'resume', 'about', 'contact'];

  const handleNavigation = (e, id) => {
    e.preventDefault();
    const ele = document.getElementById(id);
    setElement(id);
    ele?.scrollIntoView({ behavior: 'smooth' });
    setIsHeader(false);
  };
  const handleHeader = () => {
    setIsHeader(!isHeader);
  }

  return (
    <div className='relative'>
      <div className={`fixed top-0 w-full h-auto z-[999] bg-black`}>
        <div className=' md:hidden mx-2 mt-2 mb-1 inline-block rounded-md shadow-md border-[#404040] p-2 border-[1px]' onClick={() => handleHeader()}>
          <RxHamburgerMenu className={`text-white w-8 ${isHeader ? 'hidden' : 'block'}`} />
          <TfiClose className={`text-white w-8 ${isHeader ? 'block' : 'hidden'}`} />
        </div>
        {/* navbar */}
        <ul className={`md:flex hidden justify-center py-4 font-sans font-semibold text-white`}>
          {navMenu?.map((navLink, index) => {
            return (<li className='md:px-5 px-2 md:py-auto py-1'>
              <a href={'#' + { navLink }} key={index} className={`${element === navLink ? 'text-yellow' : 'text-white'} uppercase`} onClick={(e) => handleNavigation(e, navLink)}>{navLink}</a>
            </li>)
          })}
        </ul>

      </div>
      {/* Responsive navbar */}
      <div className={`md:hidden block sm:w-[50%] w-full bg-black fixed z-[999] top-[50px] responsive-nav ${isHeader ? 'custom-transition' : ''}`}>
        <ul className={`pb-3 pt-2 font-sans text-sm font-semibold text-white`}>
          {navMenu?.map((navLink, index) => {
            return (<li className='px-2 py-1'>
              <a href={'#' + { navLink }} key={index} className={`${element === navLink ? 'text-yellow' : 'text-white'} uppercase`} onClick={(e) => handleNavigation(e, navLink)}>{navLink}</a>
            </li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
