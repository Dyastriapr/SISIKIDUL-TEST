import React from 'react';
import { HeroBg, SaranaInformasi, Vector } from '../../../assets';
import { FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const textStyle = {
  WebkitTextStroke: '0.5px white', 
  textStroke: '0.5px white',
  textShadow: '2px 2px 4px rgba(0, 0, 0.2, 0.2)', 
};

export const Hero = () => {
  return (
    <div className='mt-32 '>
      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between justify-end px-8 mt-10'>
        <div className='w-full lg:w-1/2 lg:order-last flex justify-center'>
          <img src={HeroBg} alt="Hero Background" className='w-aut0 h-64 lg:h-auto' />
        </div>

        <div className='w-full lg:w-2/5'>
          <div className='space-y-1 mt-10'>
            <div className="flex items-center">
              <img src={SaranaInformasi} alt='Information' className='w-auto h-16 lg:h-20' />
            </div>
            <p className='uppercase font-bold font-extrabold text-start text-3xl lg:text-Title lg:leading-[1.2]' style={textStyle}>
              <span className='text-custom-black'>Gerakan </span>
              <span className='text-custom-Primary'>Transisi PAUD ke SD </span>
              <span className='text-custom-black'>yang Menyenangkan </span>
            </p>
            <p className='text-custom-black text-sm lg:text-base text-justify font-regular pt-3'>Kemendikbudristek telah menerbitkan kebijakan tentang Gerakan Transisi PAUD ke SD yang Menyenangkan pada Maret 2023 sebagai bagian dari gerakan Merdeka Belajar. </p>
          </div>
          <div className='py-10  flex items-center justify-center lg:justify-start'>
            <Link to="/module" className='bg-custom-Primary text-white py-3 px-8 rounded-full flex items-center justify-center space-x-2 text-sm lg:text-base shadow-lg border-4 border-white hover:bg-gradient-Primary hover:text-custom-white'>
              <FaFileAlt className="text-lg" />
              <span>Pelajari Modul</span>
            </Link>
          </div>
        </div>
      </div>
      <img src={Vector} alt="Hero Background" className='h-auto w-80 lg:w-100 lg:h-auto' />
    </div>
  );
};