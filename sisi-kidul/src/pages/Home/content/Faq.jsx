import React, { useState } from 'react';
import { vectorFaq } from '../../../assets'; // Import gambar vektor

const FAQAccordion = () => {
    // State untuk melacak item FAQ yang terbuka
    const [openIndex, setOpenIndex] = useState(null);

    // Fungsi untuk menangani klik pada judul FAQ
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Data FAQ, bisa diganti dengan data sebenarnya
    const faqData = [
        { question: 'Bagaimana dengan kurikulum SD terkait tuntutan orang tua dan guru SD tentang calistung?', answer: 'Kurikulum SD pada Kurikulum Merdeka sudah disesuaikan agar berkesinambungan. Capaian untuk Fase A (akhir kelas 2) berpusat pada kemampuan literasi secara menyeluruh, seperti kemampuan bertutur, dan kemampuan menyimak, sehingga tidak mengharuskan anak sudah harus bisa baca tulis pada kelas 1.' },
        { question: 'Bagaimana menyikapi jika guru SD masih menggunakan LKS sebagai bahan pembelajaran, sedangkan di PAUD tidak menekankan anak untuk membaca?', answer: 'Yang utama adalah pendampingan guru kepada peserta didik, serta ketepatan dalam melaksanakan kegiata pembelajaran sehingga dapat mencapai tujuan pembelajaran. LKS dapat dijadikan sebagai perangkat ajar, asalkan penerapannya mempertimbangkan bahwa masih ada anak2 yang belum dapat membaca, misalnya dengan cara dibacakan, serta LKS memiliki konten visual yang memudahkan anak menghubungkan antara kata dengan instruksi yang diberikan langsung oleh guru. Untuk mengasah kemampuan ini, silahkan gunakan alat bantu pembelajaran yang terdiri atas video inspirasi, modul pendek dan perangkat ajar. Alat bantu pembelajaran dapat diakses melalui PMM serta Laman Transisi PAUD-SD. Pada tengah tahun, diklat teknis untuk mendampingi guru secara lebih komprehensif, juga akan diluncurkan.' },
        { question: 'Bagaimana jika sudah terlanjur banyak "korban" di kelas lanjutan yang mengalami kesulitan dalam mengikuti pelajaran yang diakibatkan drilling di kelas bawah? Bagaimana solusinya?', answer: 'Melalui kebijakan kurikulum merdeka, penyediaan ragam alat bantu pembelajaran di PMM, serta ragam program lainnya, kementerian akan terus menguatkan advokasi bentuk proses pembelajaran yang berpihak pada anak. Melalui strategi ini, guru SD kelas atas juga mendapatkan kesempatan untuk meninjau kembali kegiatan pembelajaran yang sudah diterapkan, dan menyesuaikannya dengan tujuan pembelajaran yang membangun kemampuan fondasi yang diperlukan sebagai prasyarat.' },
     
    ];

    return (

        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between justify-end px-6 mt-10">
            <div data-aos="fade-up" className="lg:w-1/2">
                <p className='mb-3 text-xl lg:text-3xl font-bold mb-2 text-custom-Primary'> Pertanyaan<span className='text-custom-black'> yang sering ditanyakan</span></p>
        
                {faqData.map((item, index) => (
                    <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden mb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer py-4 px-6"
                            onClick={() => handleToggle(index)}
                        >
                            <p className="text-lg">{item.question}</p>
                            <span className="text-gray-600">{openIndex === index ? '-' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className="px-6 py-4 bg-gray-100">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="lg:w-1/2 text-end" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                <img src={vectorFaq} className="w-full md:w-[550px] lg:w-5/6 lg:ml-auto" alt="Vector FAQ" />
            </div>
        </div>
    );
};

export default FAQAccordion;
