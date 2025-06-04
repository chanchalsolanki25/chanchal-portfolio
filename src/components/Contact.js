import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { TiSocialLinkedin } from 'react-icons/ti'
import { useLocation } from 'react-router-dom';

function Contact() {
    const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true, // only animate once
    });
  }, []);

  useEffect(() => {
    // Always refresh AOS on location change
    setTimeout(() => {
      Aos.refresh();
    }, 500); // wait for scroll animation to complete (if any)
  }, [location]);
    return (
        <div id='contact' className='bg-light xl:pt-20 pt-12 relative z-50 lg:px-[100px] sm:px-[50px] px-[20px]'>
            <h2 className='xl:text-4xl sm:text-2xl text-lg text-center font-extralight lg:mb-10 mb-4 '>Get<span className='font-extrabold'> In Touch</span></h2>
            {/* <p className='text-center text-lg'><span className='font-extrabold'>Monday - Saturday:</span> 9am - 6pm</p> */}
            {/* Contact */}
            <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3  justify-center mt-8'>
                {/* Call */}
                <div className='flex flex-col items-center bg-white xl:p-8 p-3 w-full'
                    data-aos='fade-up'
                    data-aos-duration="1000"
                    // data-aos-anchor-placement="top-bottom"
                >
                    <p className='p-4 rounded-full bg-[#009900] text-white mb-2'><FiPhoneCall /></p>
                    <p className='font-bold text-center'> Call me </p>
                    <a href="tel:+353899774347" className='underline font-normal lg:text-auto text-sm'>+353 (0)899774347</a>
                </div>
                {/* Email */}
                <div className='flex flex-col items-center bg-white xl:p-8 p-3 w-full'
                    data-aos='fade-up'
                    data-aos-duration="1000"
                    // data-aos-anchor-placement="top-bottom"
                >
                    <p className='p-4 rounded-full mb-2 bg-[#ff033e] text-white'> <MdOutlineMail /></p>
                    <p className='font-bold'>Email</p>
                    <a href="mailto:chanchalmsolanki33@gmail.com" target='_blank' rel="noreferrer" className='underline font-normal lg:text-auto text-sm'>chanchalmsolanki33@gmail.com</a>
                </div>
                {/* LinkedIn */}
                <div className='xl:col-span-1 sm:col-span-2 flex flex-col items-center bg-white xl:p-8 p-3'
                    data-aos='fade-up'
                    data-aos-duration="1000"
                    // data-aos-anchor-placement="top-bottom"
                >
                    <p className='p-4 rounded-full mb-2 bg-[#00008b] text-white'><TiSocialLinkedin /></p>
                    <p className='font-bold text-center'>LinkedIn </p>
                    <a href="http://www.linkedin.com/in/chanchal-kumari-1a6903214" target='_blank' rel="noreferrer" className='underline font-normal text-center lg:text-auto text-sm'>http://www.linkedin.com/in/chanchal-kumari-1a6903214</a>
                </div>
            </div>
            {/* Footer */}
            <div className='text-center text-gray md:text-[16px] text-[10px] pt-10 pb-8'>
                <p>Copyright &copy;2024 All Right Reserved | Developed By <span className='underline text-yellow'>Chanchal Kumari</span></p>
            </div>
        </div>
    )
}

export default Contact
