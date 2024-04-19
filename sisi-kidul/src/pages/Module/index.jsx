import React, { useState } from 'react';
import PDFViewer from './PDFView/PdfView';
import ListModule from './ListModule/ListPDF';
import Game from '../../components/game/Game';

export const Module = () => {
  const [currentPdfId, setCurrentPdfId] = useState(1);
  const [currentModuleTitle, setCurrentModuleTitle] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);

  const pdfs = {
    1: 'https://drive.google.com/file/d/1d06fU-HXaepUERBhYhyZLNN-mJ5R7_aG/preview',
    2: 'https://drive.google.com/file/d/1J3O6F9EOdXaxc_rAxp9K6hrwRxz6xtxi/preview',
    3: 'https://drive.google.com/file/d/1tHiFH6Zy72A6NBsWjhv-S-ZXQ42amDBp/preview',
    4: 'https://drive.google.com/file/d/1fVrUlBcVhH2_jUcO3Z-Zu4X7egmfsyeh/preview',
    5: 'https://drive.google.com/file/d/11wWVyyaCnstGzFNKSk5xQZEIBz9nWFCB/preview',
  };

  // Fungsi untuk menentukan apakah tampilan saat ini adalah tampilan ponsel atau tidak
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  // Memanggil handleResize saat komponen dimuat dan saat ukuran layar berubah
  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleModuleClick = (moduleId, moduleTitle) => {
    setCurrentPdfId(moduleId);
    setCurrentModuleTitle(moduleTitle);

    // Jika moduleTitle adalah 'Quiz', maka tampilkan Game
    if (moduleTitle === 'Quiz') {
      setCurrentPdfId(null); // Set id PDF menjadi null agar PDFViewer tidak ditampilkan
    }
  };

  return (
    <div className='container mx-auto flex flex-col lg:flex-row lg:justify-between justify-end px-8 md:px-40 mt-10'>
      {isMobileView ? ( // Menampilkan dropdown hanya pada tampilan ponsel
        <div className='w-full mb-4 mt-10'>
          <select
            className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500'
            onChange={(e) => handleModuleClick(parseInt(e.target.value), e.target.options[e.target.selectedIndex].text)}
            value={currentPdfId !== null ? currentPdfId : ''}
          >
            {Object.keys(pdfs).map((moduleId) => (
              <option key={moduleId} value={moduleId}>
                Module {moduleId}
              </option>
            ))}
            <option value="quiz">Quiz</option> {/* Menambahkan opsi Quiz */}
          </select>
        </div>
      ) : (
        <div className='w-1/4 pe-6'>
          <ListModule onModuleClick={handleModuleClick} />
        </div>
      )}
      <div className='w-1/1 lg:w-3/4'>
        {currentPdfId !== null ? <PDFViewer pdfUrl={pdfs[currentPdfId]} /> : currentModuleTitle === 'Quiz' && <Game />}
      </div>
    </div>
  );
};

export default Module;
