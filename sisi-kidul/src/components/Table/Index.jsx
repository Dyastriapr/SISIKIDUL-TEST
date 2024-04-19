import React, { useState } from 'react';
import dataTables from './Components/DataTables';

const tableStyle = {
  border: "2px solid #000",
  borderCollapse: "collapse",
  fontSize: "10px",
  width: "100%", 
};

const thStyle = {
  border: "2px solid #000",
  padding: "8px",
  textAlign: "center",
};

const tdStyle = {
  border: "2px solid #000",
  padding: "8px",
  textAlign: "center",
};

const Table = () => {
  const [activeTable, setActiveTable] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTableClick = (index) => {
    setActiveTable(index);
    setCurrentPage(1); // Reset to first page when table changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const rowsPerPage = 10;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div className='pt-8 px-2 sm:px-6 md:px-10 lg:px-16 container mx-auto'>
      <div>
        <p className='lg:text-3xl text-center text-xl font-bold text-custom-black mb-5 px-4'>APK & APM PAUD, SD, SMP, dan SM</p>
        <div className='flex flex-col sm:flex-row'>
          <div className='sm:w-3/5 mb-5 sm:mb-0 px-4'>
            <p className='text-custom-black text-sm lg:text-base text-justify font-regular mb-5'>
              Angka Partisipasi Kasar (APK) Pendidikan Anak Usia dini (PAUD) adalah perbandingan antara jumlah penduduk yang masih bersekolah di jenjang pendidikan Pendidikan Anak Usia dini (PAUD) (tanpa memandang usia penduduk tersebut) dengan jumlah penduduk yang memenuhi syarat resmi penduduk usia sekolah di jenjang Pendidikan Anak Usia dini (PAUD) (umur 3-6 tahun).
              <br /><br />
              APK merupakan indikator yang paling sederhana untuk mengukur daya serap penduduk usia sekolah di masing-masing jenjang pendidikan. Sebagai indikator pelengkap dari indikator Angka Partisipasi Murni (APM), sehingga dapat ditunjukkan besarnya penduduk yang bersekolah pada suatu jenjang namun usianya belum mencukupi atau bahkan melebihi dari usia sekolah yang seharusnya.
            </p>
          </div>
          <div className='sm:w-2/5 px-4'>
            <p className='text-custom-black text-sm lg:text-base text-justify font-regular mb-5'>
              Sumber dan Cara Pengumpulan Data
              <br/>BPS : Survei Sosial Ekonomi Nasional (Susenas)<br/> Kor. Disagregasi
              <br/>1. Wilayah administrasi: nasional, provinsi dan kabupaten/kota.
              <br/>2. Daerah tempat tinggal: perkotaan dan perdesaan
              <br/>3. Jenis kelamin
              <br/>4. Kelompok pendapatan (pengeluaran)
              <br/><br/>Frekuensi Waktu Pengumpulan Data : Tahunan.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='my-3 lg:text-md text-center text-xl font-bold lg:mb-5 text-custom-black'>{dataTables[activeTable].title}</div>
        <div className="overflow-x-auto">
          <table className="min-w-full" style={tableStyle}>
            <thead>
              <tr>
                {dataTables[activeTable].columns.map((column, index) => (
                  <th key={index} style={thStyle}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataTables[activeTable].data.slice(startIndex, endIndex).map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {rowData.map((data, columnIndex) => (
                    <td key={columnIndex} style={tdStyle}>{data}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(dataTables[activeTable].data.length / rowsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-3 py-1 rounded-md border border-gray-300 bg-white hover:bg-gray-100 ${currentPage === i + 1 ? 'bg-gray-200' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
