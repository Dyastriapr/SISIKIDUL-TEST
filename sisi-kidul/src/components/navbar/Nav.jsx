import React, { useState } from 'react';
import { logo } from '../../assets';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0); // Menyimpan indeks item yang aktif

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
    setIsMobileMenuOpen(false); // Tutup menu mobile setelah item diklik
  };

  return (
    <nav className="bg-gradient-Primary shadow-md fixed top-0 w-full z-40 md:px-32">
      <div className="container px-6 mx-auto flex items-center justify-between py-3">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-12" />
          <span className="text-white text-lg font-semibold">Sisi Kidul</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`text-custom-LightGrey font-light text-sm lg:text-base ${activeItem === 0 ? 'text-white' : 'hover:text-custom-Primary'}`} onClick={() => handleItemClick(0)}>Beranda</Link>
          <Link to="about" className={`text-custom-LightGrey font-light text-sm lg:text-base ${activeItem === 1 ? 'text-white' : 'hover:text-custom-Primary'}`} onClick={() => handleItemClick(1)}>Tentang</Link>
          <Link to="module" className={`text-custom-LightGrey font-light text-sm lg:text-base ${activeItem === 2 ? 'text-white' : 'hover:text-custom-Primary'}`} onClick={() => handleItemClick(2)}>Modul</Link>
          <Link to="galeri" className={`text-custom-LightGrey font-light text-sm lg:text-base ${activeItem === 3 ? 'text-white' : 'hover:text-custom-Primary'}`} onClick={() => handleItemClick(3)}>Galeri</Link>
        </div>

        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-purple py-3">
          <Link to="/" className="block text-white font-light text-sm px-6 py-2">Beranda</Link>
          <Link to="about" className="block text-white font-light text-sm px-6 py-2">Tentang</Link>
          <Link to="module"className="block text-white font-light text-sm px-6 py-2">Modul</Link>
          <Link to="galeri" className="block text-white font-light text-sm px-6 py-2">Galeri</Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
