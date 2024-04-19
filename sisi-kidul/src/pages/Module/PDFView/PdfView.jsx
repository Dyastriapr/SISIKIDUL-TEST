import React from 'react';

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div className="flex container w-full h-screen mt-20 justify-end">
      <object
        data={pdfUrl}
        type="application/pdf"
        className='h-[60%] w-[100%] bg-slate-500'
      >
         <embed src={pdfUrl} type="application/pdf" className='w-full h-screen'/>
      </object>
    </div>
  );
};



export default PDFViewer;
