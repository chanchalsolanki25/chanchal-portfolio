import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react'
import { FaCalendar, FaExternalLinkAlt } from 'react-icons/fa'
import { Carousel } from 'primereact/carousel';
import { ProductService } from './ProductService'; import { Link } from 'react-router-dom';
;


function Resume(props) {
    const [products, setProducts] = useState([]);
    const [extendedId, setExtendedId] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const handleDescription = (des) => {
        const words = des.split(' ');
        const newDes = words.slice(0, 20);
        return newDes.join(' ');
    }

    const productTemplate = (product) => {
        const isExpanded = product.id === extendedId;
        return (
            <div className="border-1 w-[90%] m-auto bg-white shadow-lg overflow-hidden rounded-sm my-2 flex flex-col justify-center items-center"
                data-aos="fade-up"
                data-aos-duration="1500">
                <div className='w-full h-[200px]'>
                    <img src={product.image} alt={product.name} className="w-full h-full shadow-2 object-cover" />
                </div>
                <Link to={product.link} target='_blank' className='flex items-center underline text-blue-800'>
                    <span className='mr-1'>Visit Site</span>
                    <FaExternalLinkAlt />
                </Link>
                <div className='md:m-4 m-2'>
                    <h4 className="mb-1 text-xl my-3 hover:text-yellow duration-300">{product.name}</h4>
                    <p className="my-3 text-gray xl:min-h-[96px] md:min-h-[168px] min-h-[120px]">{isExpanded ? product.description : product?.description.length > 100 ? handleDescription(product?.description) + '...' : product?.description}</p>
                </div>
                <button className='w-full text-center py-3 bg-yellow text-white' onClick={() => setExtendedId(product.id === extendedId ? null : product.id)}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        );
    };
    useEffect(() => {
        console.log('AOS initialized');
        Aos.init();
    }, []);

    return (
        <div className='bg-light lg:pt-16 pt-12 relative z-50'>
            <h2 className='xl:text-4xl text-3xl text-center font-extralight lg:mb-10 mb-4'>My <span className='font-extrabold'>Resume</span></h2>
            <div className='lg:mx-[100px] md:mx-[50px] mx-[20px]'>

                {/* Experience */}
                <div className='basis-[49%]'>
                    <h3 className='xl:text-3xl text-2xl lg:my-7 my-0 text-center ' style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Experience</h3>
                    <div className='md:pb-0 pb-5'>
                        {props?.experience?.map((data, index) => {
                        console.log('data.experience', typeof data.experience);

                            return (
                                <div className={`mx-2 lg:py-7 py-5 flex md:flex-row flex-col justify-center ${index % 2 != 0 ? 'md:flex-row-reverse flex-row' : ''}`} data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-anchor-placement="top-bottom"
                                    key={index}>
                                    <div className={`basis-[50%] flex flex-col ${index % 2 == 0 ? ' md:border-r-[1px] md:border-gray mr-8  pr-8 md:items-end items-start' : 'items-start'}`}>
                                        <div className='flex items-center justify-end font-bold'>
                                            <FaCalendar className='mr-2' />
                                            <p className=''>{data.year}</p>
                                        </div>
                                        <p className='md:text-lg text-[16px]'>{data.role}</p>
                                    </div>
                                    <div className={`basis-[50%] ${index % 2 != 0 ? 'md:border-r-[1px] md:border-gray md:mr-8 mr-auto  md:pr-8 pr-auto md:text-right text-left' : ''}`}>
                                        <p className='md:text-xl text-lg mb-3 text-black'>{data.company}</p>
                                        <p className='text-gray' style={{ fontFamily: 'Poppins, sans-serif' }}>{data.experience}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Education */}
                <div className='basis-[49%]'>
                    <h3 className='xl:text-3xl text-2xl lg:my-7 mt-3 mb-5 text-center' style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Education</h3>
                    <div className='md:flex justify-center md:py-5 pb-4 pt-0'>
                        {props?.education?.map((data, index) => {
                            return (
                                <div className='md:p-7 mx-2 p-4 border-l-[1px] shadow-lg relative border-gray'
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-anchor-placement="top-bottom"
                                    key={index}>
                                    <p className='absolute left-[-8px] md:top-8 top-5 p-2 rounded-full bg-yellow '></p>
                                    <div className='flex items-center font-bold'>
                                        <FaCalendar className='mr-2' />
                                        <p className=''>{data.year}</p>
                                    </div>
                                    <p className='md:text-xl text-lg my-3 text-black'>{data.course}</p>
                                    <p className='text-gray' style={{ fontFamily: 'Poppins, sans-serif' }}>{data.score}</p>
                                    <p className='text-gray' style={{ fontFamily: 'Poppins, sans-serif' }}>{data.university}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="card relative z-40 lg:px-[100px] md:px-[50px] px-[20px] bg-light">
                <h3 className='xl:text-3xl text-2xl md:py-7 pb-0 pt-3 text-center' style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Projects</h3>
                <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel md:pb-4" circular
                    autoplayInterval={5000}
                    itemTemplate={productTemplate}
                    showIndicators={true}
                />
            </div>
        </div>
    )
}

export default Resume
