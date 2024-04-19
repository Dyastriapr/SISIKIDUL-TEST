import React from 'react';
import { logo } from '../../assets'

const Footer = () => {
  return (
    <footer className="bg-custom-Primary py-12 md:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6">
        <div className="flex justify-center lg:justify-start items-center space-x-8 lg:space-x-16 mb-8 lg:mb-0">
          <a href="https://kemdikbud.go.id" target="_blank" rel="noopener noreferrer">
            <img src="https://www.kemdikbud.go.id/main/files/large/83790f2b43f00be" alt="Logo Kemdikbud" className="w-12 lg:w-20 h-auto" />
          </a>
          <a href="https://example.com/transisi-paud" target="_blank" rel="noopener noreferrer">
            <img src="https://ditpsd.kemdikbud.go.id/transisipaudsd/wp-content/uploads/2023/12/cropped-Untitled-design-27.png" alt="Logo Transisi PAUD" className="w-12 lg:w-20 h-auto" />
          </a>
          <a href="https://example.com/kota-bogor" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Emblem_of_Bogor.svg/1641px-Emblem_of_Bogor.svg.png" alt="Logo Kota Bogor" className="w-12 lg:w-20 h-auto" />
          </a>
          <a href="https://example.com/penulis" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Logo Penulis" className="w-12 lg:w-20 h-auto" />
          </a>
        </div>
        <div className="text-center lg:text-right text-white text-sm">
          <p className="mb-4">© 2024 SISI:KIDUL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
