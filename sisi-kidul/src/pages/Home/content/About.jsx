import React from 'react';
import { naungan, about } from '../../../assets';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between justify-end px-6 mt-10'>
      <div className='w-full lg:w-2/5 lg:order-last flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:space-x-6'>
        <div>
          <p className='lg:text-3xl text-xl font-bold lg:mb-5 text-custom-black'>Tentang Website <span className='text-custom-Primary'>SISI:KIDUL</span></p>
          <p className='text-custom-black text-sm lg:text-base text-justify font-regular pt-3'>Gerakan Transisi PAUD SD merujuk pada upaya sistematis untuk memfasilitasi proses transisi yang lancar dan efektif bagi anak-anak yang pindah dari pendidikan anak usia dini (PAUD) ke Sekolah Dasar (SD). Gerakan ini mencakup berbagai kegiatan dan strategi yang dirancang untuk membantu anak-anak menyesuaikan diri dengan lingkungan sekolah baru, kurikulum yang lebih formal, dan tuntutan belajar yang lebih tinggi. </p>
          <div className='flex flex-col space-y-6 items-center lg:items-start lg:mb-0 mb-8'>
            <p className='pt-10 text-base'>dibawah naungan :</p>
            <img src={naungan} alt="" className='lg:w-96 w-64 ' />
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/2 lg:order-last flex justify-center space-y-10'>
        <div data-aos="fade-up" >
          <img src={about} alt="" className='w-full lg:mt-0 md:mt-0 flex justify-end items-end rounded-xl border-8 border-white shadow-lg' />
          <div className='mt-5 text-center'>
            <Link className='text-base text-custom-Primary underline' to="/galery">Lihat Galeri</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
