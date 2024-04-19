import React from 'react';

const Youtube = () => {
  // Daftar ID video YouTube
  const videoIds = ['3aC_iBJQHWY', 'YQe6rRiEFyY', 'YQe6rRiEFyY']; // Ganti dengan ID video yang sesuai

  return (
    <div  className="flex container flex-col mx-auto justify-center mb-10 px-6">
        <div data-aos="fade-up">
        <p className='text-center text-xl lg:text-3xl font-bold mb-10 text-custom-black'>Lihat Lainya</p>
        </div>
      <div data-aos="fade-up" className="flex justify-center space-x-8">
        {videoIds.map((videoId, index) => (
          <iframe
            key={index}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`YouTube Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Youtube;

