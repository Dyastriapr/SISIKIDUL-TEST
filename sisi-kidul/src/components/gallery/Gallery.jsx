import React, { useState } from 'react';
import { webinar1, webinar2, webinar3, webinar4, webinar5, webinar6, webinar7, webinar8 } from '../../assets';
import { FaArrowCircleLeft, FaArrowCircleRight, FaExpand, FaTimes } from "react-icons/fa";

export const Gallery = () => {
  const galleryImages = [webinar1, webinar2, webinar3, webinar4, webinar5, webinar6, webinar7, webinar8];
  const [current, setCurrent] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState(null);
  const [expanded, setExpanded] = useState(false); // State to track image expansion

  const previousSlide = () => {
    setCurrent(current === 0 ? galleryImages.length - 1 : current - 1);
  }

  const nextSlide = () => {
    setCurrent(current === galleryImages.length - 1 ? 0 : current + 1);
  }

  const openPopup = (index) => {
    setPopupImageIndex(index);
    setExpanded(true); // Expand image when opening popup
    setShowPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
    setExpanded(false); // Reset the image expansion state when closing popup
  }

  return (
    <div className='container m-auto justify-center p-5 lg:p-20'>
      <p className='lg:text-3xl text-xl font-bold lg:mb-2 text-center text-custom-Primary'>Informasi Kegiatan Webinar</p>
      <p className='text-base text-center text-custom-darkGrey pb-5'>Catat Tanggalnya dan jangan sampai ketinggalan!</p>

      <div className='max-w-[90%] lg:max-w-[400px] mx-auto overflow-hidden relative'>
        <div className='flex transition ease-out duration-300' style={{ transform: `translateX(-${current * 100}%)`,alignItems: 'flex-start' }}>
          {galleryImages.map((image, index) => (
            <img  
            key={index} 
            src={image} 
            alt={`Gallery ${index + 1}`} 
            onClick={() => openPopup(index)} 
            className="object-contain w-full bg-gradient-Primary"  />
          ))}
        </div>

        <div className='absolute top-0 h-full w-full justify-between items-center flex px-4 lg:px-10 text-white text-3xl'>
          {/* Move the expand button to the top right */}
          {!expanded && (
            <button
              onClick={() => openPopup(current)}
              className="absolute top-0 right-0 mt-2 mr-2 text-white"
            >
              <FaExpand />
            </button>
          )}

          <button onClick={previousSlide}
          className='shadow-md'>
            <FaArrowCircleLeft />
          </button>

          <button onClick={nextSlide}
          className='shadow-md'>
            <FaArrowCircleRight />
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="max-w-[90%] lg:max-w-[600px] max-h-[90%] relative">
            <div className="w-full h-full flex justify-center items-center bg-white">
              <img
                src={galleryImages[popupImageIndex]}
                alt={`Gallery ${popupImageIndex + 1}`}
                className={expanded ? "w-full h-full object-contain" : "max-w-full max-h-full object-contain"}
              />
            </div>
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-0 right-0 mt-2 mr-2 text-white bg-gradient-Primary"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
