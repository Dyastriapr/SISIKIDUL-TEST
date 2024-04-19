import React from 'react';
import { video } from '../../../assets';

const VideoPlayer = () => {
    return (
        <div className='flex container flex-col mx-auto justify-center gap-10 mt-20 lg:mt-32 px-6 md:px-40 mb-32'>
            <div data-aos="fade-up">
                <p className='text-center text-xl lg:text-3xl font-bold mb-2 text-custom-black'>Transisi PAUD SD</p>
                <p className='text-base text-center text-custom-darkGrey mb-8'>Ayo berkenalan dengan Transisi PAUD SD ini</p>
                <div style={{ maxWidth: '100%', margin: '0 auto' }}>
                    <video controls style={{ width: '100%' }}>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
