import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export const Linimasa = () => {
  const [activeButton, setActiveButton] = useState('PPDB');
  const [message, setMessage] = useState('');

  useEffect(() => {
    switch (activeButton) {
      case 'PPDB':
        setMessage('PPDB adalah Penerimaan Peserta Didik Baru.');
        break;
      case '2 Minggu Pertama':
        setMessage('<b>SD:</b> <br/><br/> Masa Perkenalan: anak (serta orang tua) dengan lingkungan belajarnya agar dapat merasa nyaman dalam berkegiatan <br/><br/> Masa Perkenalan: sekolah dengan anak melalui kegiatan pembelajaran yang bertujuan untuk mendapatkan potret capaian siswa melalui asesmen awal, dan digunakan sebagai basis perancangan kegiatan pembelajaran selanjutnya.');
        break;
      case 'Pelaksanaan Pembelajaran':
        setMessage('<b>PAUD dan SD:</b> <br/> <br/> Memilih kegiatan pembelajaran yang memberikan pengalaman menyenangkan dan bermakna (memastikan ketercapaian kemampuan fondasi). <br/> <br/> Melaksanakan kegiatan asesmen di kelas dengan teknik yang menguatkan sikap terhadap belajar yang positif (teknik yang digunakan tidak berupa tes lisan, tertulis atau penugasan). <br/> <br/>Guru PAUD dan guru SD mampu menyusun informasi mengenai perkembangan anak yang penting untuk diketahui oleh orang tua/wali murid.');
        break;
      default:
        setMessage('');
    }
  }, [activeButton]);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className='container mx-auto px-6 md:px-28 mt-20 lg:mt-32'>
      <div data-aos="fade-up">
        <p className='text-center text-xl lg:text-3xl font-bold text-custom-black mb-3'>Praktik Penguatan Transisi PAUD SD<br/> yang Berpihak pada Anak</p>
        <p className='text-center text-base text-custom-darkGrey mb-12'>Apa Perubahan yang ingin kita lihat di PAUD dan SD pada tahun ajaran 2023/2024?</p>

        <div className='flex flex-col lg:flex-row items-center lg:justify-between justify-end'>
          <div className='w-full lg:w-1/3 lg:order-last flex justify-center items-center'>
            <button
              style={{ width: '280px', height: '80px' }}
              className={`rounded-full flex items-center justify-center space-x-2 text-sm lg:text-base border-4 ml-0 lg:ml-6 ${activeButton === 'PPDB' ? 'bg-custom-Primary text-white shadow-lg border-white' : 'bg-white text-custom-Primary outline-blue-500 hover:bg-custom-LightGrey'}`}
              onClick={() => handleClick('PPDB')}
            >
              <span>PPDB</span>
            </button>
            <div className="flex items-center ml-2 text-custom-Primary hidden md:inline">
              --
              <FaArrowRight className="text-custom-Primary hidden md:inline" />
            </div>
          </div>
          <div className='w-full lg:w-1/3 lg:order-last flex justify-center items-center'>
            <button
              style={{ width: '280px', height: '80px' }}
              className={`rounded-full flex items-center justify-center space-x-2 text-sm lg:text-base border-4 ml-0 my-2 lg:ml-6 lg:my-0 ${activeButton === '2 Minggu Pertama' ? 'bg-custom-Primary text-white shadow-lg border-white' : 'bg-white text-custom-Primary outline-blue-500 hover:bg-custom-LightGrey'}`}
              onClick={() => handleClick('2 Minggu Pertama')}
            >
              <span>2 Minggu Pertama<br />di tahun ajaran baru 2023</span>
            </button>
            <div className="flex items-center ml-2 text-custom-Primary hidden md:inline">
              --
              <FaArrowRight className="text-custom-Primary hidden md:inline" />
            </div>
          </div>
          <div className='w-full lg:w-1/3 lg:order-last flex justify-center'>
            <button
              style={{ width: '280px', height: '80px' }}
              className={`rounded-full flex items-center justify-center space-x-2 text-sm lg:text-base border-4 ${activeButton === 'Pelaksanaan Pembelajaran' ? 'bg-custom-Primary text-white shadow-lg border-white' : 'bg-white text-custom-Primary outline-blue-500 hover:bg-custom-LightGrey'}`}
              onClick={() => handleClick('Pelaksanaan Pembelajaran')}
            >
              <span>Pelaksanaan<br />Pembelajaran</span>
            </button>
          </div>
        </div>
        <div className='md:px-8 my-8'>
          {message && (
            <div className="mx-auto mt-4 text-justify bg-blue-100 border border-custom-Primary text-cutom-Black px-4 py-3 rounded-md" dangerouslySetInnerHTML={{ __html: message }} />
          )}
        </div>
      </div>
    </div>
  );
};
