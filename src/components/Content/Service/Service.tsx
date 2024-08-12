import React from 'react'
import Title from '../../Title'
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoIosShirt } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { PiShirtFoldedDuotone } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";






const Service = () => {
  return (
    <div id='sectionService' className='px-24 py-16 lg:pt-24'>
      <Title mainText="Our" highlightText="Service"/>
      <div className='flex justify-center pt-5'>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-3 text-blue-950'>
          <div className='flex flex-col items-center duration-200 hover:scale-110'>
            <div className='text-5xl md:text-9xl'><IoShieldCheckmarkSharp/></div>
            <div>Bergaransi</div>
          </div>
          <div className='flex flex-col items-center duration-200 hover:scale-110'>
            <div className='text-5xl md:text-9xl'><RiCustomerService2Fill/>
          </div >
            <div>Konsultasi Gratis</div>
          </div>
          <div className='flex flex-col items-center duration-200 hover:scale-110'>
            <div className='text-5xl md:text-9xl'><IoIosShirt/></div>
            <div>Desain Mockup Gratis</div>
          </div>
          <div className='flex justify-center col-span-3 gap-8'>
            <div className='flex flex-col items-center duration-200 hover:scale-110'>
              <div className='text-5xl md:text-9xl'><MdOutlineDateRange/></div>
              <div>Tepat Waktu</div>
            </div>
            <div className='flex flex-col items-center duration-200 hover:scale-110'>
              <div className='text-5xl md:text-9xl'><PiShirtFoldedDuotone/></div>
              <div>Pembuatan Sample</div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-5 text-center lg:px-44'>
        <div className='italic'>
          <span className='font-bold'>BUATINAJA.CO </span>
          <span>hadir untuk memberikan solusi terbaik dengan layanan konveksi baju yang berkualitas dan terpercaya.</span>
          
        </div>
      </div>
    </div>
  )
}

export default Service