import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Import ikon dari Font Awesome
import { FotoProfil } from '../../assets';


const About = () => {
    return (
        <div id='about' className='pt-32 container md:px-32 p-5 mx-auto'>
            <div className='flex items-center justify-center'>
                <img src={FotoProfil} alt="" className='w-80'/>
            </div>
            <p className='text-center text-xl lg:text-3xl font-bold mb-2 text-custom-black'>Riksa Suci Imaniah</p>
            <p className='text-center text-base mb-2 text-custom-black'>Narasumber Transisi PAUD-SD Kemdikbud</p>
            <div className="flex justify-center space-x-4 mb-4">
                {/* Icon Instagram */}
                <a href="https://www.instagram.com/riksaicha" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl text-gray-500 hover:text-gray-700 cursor-pointer" />
                </a>
                {/* Icon Youtube */}
                <a href="https://www.youtube.com/@riksasuciimaniah3844" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-3xl text-gray-500 hover:text-gray-700 cursor-pointer" />
                </a>
                {/* Icon Email */}
                <a href="mailto:riksaravin81@gmail.com">
                    <FaEnvelope className="text-3xl text-gray-500 hover:text-gray-700 cursor-pointer" />
                </a>
                {/* Icon Whatsapp */}
                <a href="https://wa.me/+6281384990210" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-3xl text-gray-500 hover:text-gray-700 cursor-pointer" />
                </a>
            </div>
            <div className='flex items-center justify-center'>
                <p className='lg:w-1/2 text-center text-base mb-8 text-custom-black text-justify'>
                    Website ini dibuat oleh Riksa Suci Imaniah, seorang Narasumber Transisi PAUD-SD di SD Negeri Polisi 2 Bogor Kota Bogor, Jawa Barat. dalam rangka mendukung kebijakan Merdeka Belajar episode 24 tentang Transisi PAUD ke SD yang menyenangkan. Direktorat Guru Pendidikan Dasar dan Direktorat Guru Pendidikan Anak Usia Dini dan Pendidikan Masyarakat, Direktorat Jenderal Guru dan Tenaga Kependidikan telah menyelenggarakan Bimbingan Teknis Transisi PAUD-SD bagi guru PAUD dan SD terpilih.
                </p>
            </div>
            <div className='flex items-center justify-center mb-8'>
                <p className='lg:w-1/2 text-center text-base mb-2 text-custom-black text-justify'>
                    <b>Pengalaman:</b>
                    <ul className="list-disc ml-8">
                        <li>School Of Universe</li>
                        <li>SMP Negeri 1 Bogor</li>
                        <li>Guru Sekolah Indonesia Luar Negeri (SILN), Myanmar</li>
                        <li>Pengurus IGI Kota Bogor</li>
                        <li>Pengajar Praktik Angkatan 4 Kota Bogor</li>
                        <li>Guru Pamong PPG Prajab & Daljab – Universitas Pakuan</li>
                        <li>NS-BPB (Narasumber Berbagi Praktik Baik) IKM di PMM</li>
                        <li>Fasilitator Guru Penggerak Angkatan 8</li>
                        <li>Guru Penggerak Rekognisi Angkatan 8</li>
                        <li>Narasumber Transisi PAUD-SD Kemdikbud</li>
                        <li>Praktisi Mengajar</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default About;
