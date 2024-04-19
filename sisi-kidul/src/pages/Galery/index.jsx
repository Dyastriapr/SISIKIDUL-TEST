import React, { useState } from 'react';
import { galeri1, galeri2, galeri3, galeri4, galeri5 ,galeri6 , galeri7, galeri8 , galeri9 } from '../../assets';

const GalleryItem = ({ image, caption }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img 
        src={image} 
        alt={caption} 
        className="w-full h-64 object-cover cursor-pointer" 
        onClick={togglePopup} 
      />
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-2xl mx-auto">
            <img src={image} alt={caption} className="max-w-full max-h-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <p className="text-sm font-base">{caption}</p>
            </div>
            <button className="absolute top-0 right-0 m-4 text-white" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const images = [
    { image: galeri1, caption: 'WORKSHOP PENGURUS POKJA BUNDA PAUD TAHUN 2023' },
    { image: galeri2, caption: 'WORKSHOP PENGURUS POKJA BUNDA PAUD TAHUN 2023 2' },
    { image: galeri3, caption: 'WORKSHOP PENGURUS POKJA BUNDA PAUD TAHUN 2023 3' },
    { image: galeri4, caption: 'BIMBINGAN TEKNIS PAUD KE SD YANG MENYENANGKAN BOGOR SELATAN' },
    { image: galeri5, caption: 'BIMBINGAN TEKNIS PAUD KE SD YANG MENYENANGKAN ANGKATAN II' },
    { image: galeri6, caption: 'RAPAT KOORDINASI PENGURUS POKJA BUNDA PAUD KOTA BOGOR 2024' },
    { image: galeri7, caption: 'DIKLAT TRANSISI PAUD - SD GURU SD KELAS 1 & 2' },
    { image: galeri8, caption: 'TRANSISI PAUD KE SD YANG MENYENANGKAN KECAMATAN BOGOR TENGAH KOTA BOGOR' },
    { image: galeri9, caption: 'TRANSISI PAUD-SD' },
  ];

  return (
    <div className="container mx-auto px-4 py-20 md:px-32">
      <h2 className="text-3xl font-bold mb-4 text-center">Galeri</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <GalleryItem key={index} image={item.image} caption={item.caption} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
