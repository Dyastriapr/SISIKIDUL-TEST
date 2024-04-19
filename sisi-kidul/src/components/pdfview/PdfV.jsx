import React from 'react';
import PdfViewer from './PdfViewer';

const PdfV = () => {
  const pdfFiles = [
    '/assets/pdf1.pdf',
    '/assets/pdf2.pdf',
    '/assets/pdf3.pdf',
    '/assets/pdf4.pdf',
    '/assets/pdf5.pdf',
    '/assets/pdf6.pdf'
  ];

  return (
    <div>
      {pdfFiles.map((pdf, index) => (
        <PdfViewer key={index} pdfPath={pdf} />
      ))}
    </div>
  );
};

export default PdfV;
