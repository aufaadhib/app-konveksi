import React, { useState } from 'react';
import { CiHome, CiShop } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { Link as LinkScroll } from 'react-scroll';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  return (
    <>
      <div className='hidden lg:block'>
        <div className='fixed z-50 flex items-center justify-center w-full py-5 text-white shadow-md lg:space-x-44 bg-customBlue'>
          <div className='text-3xl font-bebas-neue'>
            BuatinAJA.CO
          </div>
          <div className='flex items-center space-x-14 font-open-sans'>
            <LinkScroll
              to='sectionService'
              smooth
              spy={true}
              onSetActive={() => setActiveSection('sectionService')}
              className={`px-2 py-1 cursor-pointer rounded-xl ${
                activeSection === 'sectionService' ? 'text-teal-400' : 'text-white'
              } hover:bg-white hover:text-teal-400`}
            >
              Service
            </LinkScroll>
            <LinkScroll
              to='sectionProduct'
              smooth
              spy={true}
              onSetActive={() => setActiveSection('sectionProduct')}
              className={`px-2 py-1 cursor-pointer rounded-xl ${
                activeSection === 'sectionProduct' ? 'text-teal-400' : 'text-white'
              } hover:bg-white hover:text-teal-400`}
            >
              Produk
            </LinkScroll>
            <LinkScroll
              to='sectionHowToOrder'
              smooth
              spy={true}
              onSetActive={() => setActiveSection('sectionHowToOrder')}
              className={`px-2 py-1 cursor-pointer rounded-xl ${
                activeSection === 'sectionHowToOrder' ? 'text-teal-400' : 'text-white'
              } hover:bg-white hover:text-teal-400`}
            >
              Cara Order
            </LinkScroll>
            <LinkScroll
              to='sectionPortofolio'
              smooth
              spy={true}
              onSetActive={() => setActiveSection('sectionPortofolio')}
              className={`px-2 py-1 cursor-pointer rounded-xl ${
                activeSection === 'sectionPortofolio' ? 'text-teal-400' : 'text-white'
              } hover:bg-white hover:text-teal-400`}
            >
              Portofolio
            </LinkScroll>
            <div>
              <button className='px-5 py-3 text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl'>
                Download Katalog
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='block lg:hidden'>
        <div className='fixed bottom-0 z-50 flex items-center justify-center w-full py-3'>
          <div className='flex px-5 py-3 space-x-5 text-white bg-customBlue rounded-3xl'>
          <LinkScroll
              to='sectionService'
              smooth
              spy={true}
              onSetActive={() => setActiveSection('sectionService')}
              className={`text-4xl ${
                activeSection === 'sectionService' ? 'text-teal-400 -translate-y-5 scale-125 rounded-full duration-300 bg-customBlue p-1' : 'text-white duration-300'
              } cursor-pointer p-1`}
            >
              <CiHome className='text-s'/>
            </LinkScroll>
            
          <LinkScroll
              to='sectionProduct'
              smooth
              spy={true}
              onSetActive={() => setActiveSection('sectionProduct')}
              className={`text-4xl ${
                activeSection === 'sectionProduct' ? 'text-teal-400 -translate-y-5 scale-125 rounded-full duration-300 bg-customBlue ' : 'text-white duration-300'
              } cursor-pointer p-1`}
            >
              <CiShop/>
            </LinkScroll>
          <LinkScroll
              to='sectionHowToOrder'
              smooth
              spy={true}
              onSetActive={() => setActiveSection('sectionHowToOrder')}
              className={`text-4xl ${
                activeSection === 'sectionHowToOrder' ? 'text-teal-400 -translate-y-5 scale-125 rounded-full duration-300 bg-customBlue ' : 'text-white duration-300'
              } cursor-pointer p-1`}
            >
              <FaWhatsapp/>
            </LinkScroll>
          <LinkScroll
              to='sectionPortofolio'
              smooth
              spy={true}
              onSetActive={() => setActiveSection('sectionPortofolio')}
              className={`text-4xl ${
                activeSection === 'sectionPortofolio' ? 'text-teal-400 -translate-y-5 scale-125 rounded-full duration-300 bg-customBlue p-1' : 'text-white duration-300'
              } cursor-pointer p-1`}
            >
              <AiFillProduct/>
            </LinkScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
