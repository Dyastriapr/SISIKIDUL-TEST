import React, { useState } from 'react';
import { fondasi1, fondasi2, fondasi3, fondasi4, fondasi5, fondasi6 } from '../../../assets';

const Fondasi = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardNumber) => {
    setSelectedCard(selectedCard === cardNumber ? null : cardNumber);
  };

  const cardData = [
    { image: fondasi1, title: 'Mengenal Nilai Agama dan Budi Pekerti', description: 'Mengenal konsep Tuhan YME dan mengetahui kegiatan ibadah sesuai dengan agama atau kepercayaannya.' },
    { image: fondasi2, title: 'Keterampilan Sosial dan Bahasa', description: 'Dapat meminta tolong, <br/>Dapat mengucap maaf dan terima kasih' },
    { image: fondasi3, title: 'Kematangan Emosi', description: 'Dapat mempertahankan perhatian untuk mengikuti kegiatan di kelas dalam rentang waktu yang sesuai dengan usianya.' },
    { image: fondasi4, title: 'Kematangan Kognitif', description: 'Mau mencoba kembali atau memperbaiki pekerjaan jika melakukan kesalahan.' },
    { image: fondasi5, title: 'Keterampilan motorik dan perawatan diri', description: 'Mampu mengelola barang-barang milik pribadi yang dibawa ke sekolah. (Tahu mana barang miliknya, bisa membereskan tas sendiri)' },
    { image: fondasi6, title: 'Pemaknaan terhadap belajar yang positif', description: 'Mampu membilang jumlah benda atau objek dan menggunakan angka sebagai simbol jumlah objek atau benda' }
  ];

  return (
    <div className='flex container flex-col mx-auto justify-center gap-10 mt-20 lg:mt-32'>
      <div data-aos="fade-up">
        <p className='text-center text-xl lg:text-3xl font-bold mb-2 text-custom-black'>6 Kemampuan Fondasi Anak</p>
        <p className='text-base text-center text-custom-darkGrey'>Kemampuan fondasi ini dibangun secara kontinu dari PAUD hingga kelas dua pada jenjang Sekolah Dasar</p>
      </div>
      <div className='mx-auto flex flex-col lg:flex-row items-center lg:justify-between justify-end px-8 '>
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-4 justify-center">
          {cardData.map((card, index) => (
            <div key={index} data-aos="fade-up" className={`bg-white shadow-sm p-4 h-36 lg:h-72 w-36 lg:w-72 flex flex-col justify-center items-center text-center rounded-xl transition duration-300 transform hover:shadow-xl ${selectedCard === index ? 'animate__animated animate__flipInY' : ''}`} onClick={() => handleCardClick(index)}>
              {selectedCard !== index && (
                <>
                  <img className="h-12 w-auto lg:h-24 lg:w-auto mb-4" src={card.image} alt="Card" />
                  <div className="text-xs sm:text-sm md:text-md lg:text-md w-full">{card.title}</div>
                </>
              )}
              {selectedCard === index && (
                <div className='text-[8px]' data-aos="flip-up" dangerouslySetInnerHTML={{ __html: card.description }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fondasi;
