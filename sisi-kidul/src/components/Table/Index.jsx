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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTableClick = (index) => {
    setActiveTable(index);
    setIsDropdownOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const rowsPerPage = 10;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div className='py-8 px-4 sm:px-6 lg:px-8 container mx-auto'>
      <div>
        <p className='text-center text-xl font-bold text-custom-black mb-5'>APK & APM PAUD, SD, SMP, dan SM</p>
        <div className='flex flex-col sm:flex-row'>
          <div className='w-full sm:w-3/5 mb-5 sm:mb-0 px-5'>
            <p className='text-custom-black text-sm lg:text-base text-justify font-regular'>
              Angka Partisipasi Kasar (APK) Pendidikan Anak Usia dini (PAUD) adalah perbandingan antara jumlah penduduk yang masih bersekolah di jenjang pendidikan Pendidikan Anak Usia dini (PAUD) (tanpa memandang usia penduduk tersebut) dengan jumlah penduduk yang memenuhi syarat resmi penduduk usia sekolah di jenjang Pendidikan Anak Usia dini (PAUD) (umur 3-6 tahun).
              <br /><br />
              APK merupakan indikator yang paling sederhana untuk mengukur daya serap penduduk usia sekolah di masing-masing jenjang pendidikan. Sebagai indikator pelengkap dari indikator Angka Partisipasi Murni (APM), sehingga dapat ditunjukkan besarnya penduduk yang bersekolah pada suatu jenjang namun usianya belum mencukupi atau bahkan melebihi dari usia sekolah yang seharusnya.
            </p>
          </div>
          <div className='w-full sm:w-2/5 px-5'>
            <p className='text-custom-black text-sm lg:text-base text-justify font-regular'>
              Sumber dan Cara Pengumpulan Data
              <br />BPS : Survei Sosial Ekonomi Nasional (Susenas)<br /> Kor. Disagregasi
              <br />1. Wilayah administrasi: nasional, provinsi dan kabupaten/kota.
              <br />2. Daerah tempat tinggal: perkotaan dan perdesaan
              <br />3. Jenis kelamin
              <br />4. Kelompok pendapatan (pengeluaran)
              <br /><br />Frekuensi Waktu Pengumpulan Data : Tahunan.
            </p>
          </div>
        </div>
      </div>
      <div className="relative inline-block text-left flex align-items justify-center">
        <div className='text-center p-2'> Pilih Table
          <button
            type="button"
            onClick={handleDropdownToggle}
            className="mb-8 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="options-menu"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            {dataTables[activeTable].title}
            <svg className={`-mr-1 ml-1 h-5 w-5 ${isDropdownOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {isDropdownOpen && (
          <div className="origin-top-right absolute center-0  mt-24 w-100 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="py-1" role="none">
              {dataTables.map((table, index) => (
                <button key={index} onClick={() => handleTableClick(index)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{table.title}</button>
              ))}
            </div>
          </div>
        )}
      </div>

      {activeTable !== null && (
        <>
          <h2 className='my-3 lg:text-md text-center text-xl font-bold lg:mb-5 text-custom-black'>{dataTables[activeTable].title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full" style={tableStyle}>
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
        </>
      )}
    </div>
  );
}

export default Table;
