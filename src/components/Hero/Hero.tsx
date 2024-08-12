import React from 'react'
import { SiAdidas, SiAdobeacrobatreader, SiAirtel, SiAlby, SiAmazonaws, SiApple, SiAsus, SiBadoo, SiBandsintown } from "react-icons/si";

const Hero = () => {
  return (
    <>
          {/* <div className='min-h-screen lg:pt-[88px] relative'>
            <div className='w-full bg-center bg-cover h-[30rem] flex flex-col justify-center' style={{ backgroundImage: `url(/images/hero.jpeg)` }}>
            <div className='absolute inset-0 bg-black pointer-events-none opacity-10'></div>
            <div className='text-5xl font-bold text-white font-open-sans'>
              Konveksi Baju
            </div>
            <div className='text-5xl font-bold text-teal-400 font-open-sans'>
              Terpercaya
            </div>
            <div className='pt-10 space-x-3'>
              <button className='px-5 py-3 text-white duration-300 ring-2 rounded-3xl ring-white hover:scale-105'>
                Cek Layanan Kami
              </button>
              <button className='px-5 py-3 text-white duration-300 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl hover:scale-105'>
              Customer Service
            </button>
            </div>
            <div className='pt-10 text-white'>
              Telah Dipercaya Oleh
              <div className='flex justify-center px-4 pt-3 space-x-2 text-5xl'>
                <SiAdidas/>
                <SiAirtel />
                <SiAdobeacrobatreader />
                <SiAlby />
                <SiAmazonaws />
                <SiApple />
                <SiAsus />
                <SiBadoo />
                <SiBandsintown />
              </div>
            </div>
            </div>
        </div> */}
        <div className='lg:pt-[88px] relative'>
            <div className='w-full bg-center bg-cover h-[30rem] grid grid-cols-1 lg:grid-cols-2 justify-center items-center' style={{ backgroundImage: `url(/images/hero.jpeg)` }}>
            <div className='absolute inset-0 bg-black pointer-events-none opacity-10'></div>
            <div className='flex flex-col items-center'>
            <div className='text-5xl font-bold text-white font-open-sans'>
              Konveksi Baju
            </div>
            <div className='text-5xl font-bold text-teal-400 font-open-sans'>
              Terpercaya
            </div>
            <div className='pt-10 space-x-3'>
              <button className='px-5 py-3 text-white duration-300 ring-2 rounded-3xl ring-white hover:scale-105'>
                Cek Layanan Kami
              </button>
              <button className='px-5 py-3 text-white duration-300 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl hover:scale-105'>
              Customer Service
            </button>
            </div>
            </div>
            
            <div className='flex flex-col items-center justify-center text-white'>
              <div className='text-lg lg:text-xl'>
                Telah Dipercaya Oleh :
              </div>
              <div className='flex justify-center px-4 pt-3 space-x-2 text-4xl lg:text-6xl '>
                <SiAdidas/>
                <SiAirtel />
                <SiAdobeacrobatreader />
                <SiAlby />
                <SiAmazonaws />
                <SiApple />
                <SiAsus />
                <SiBadoo />
                <SiBandsintown />
              </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Hero