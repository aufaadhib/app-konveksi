import React from 'react'
import { FaTelegram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ButtonOrder from '../ButtonOrder';


const Footer = () => {
  return (
<div className='w-full px-10 py-16 pb-24 bg-center bg-cover lg:pt-24 lg:pb-16' style={{ backgroundImage: `url(/images/footer.jpg)` }}>
<div>
    <div className='grid grid-cols-1 text-center text-white lg:grid-cols-3 font-open-sans'>
        <div className='space-y-6'>
        <div className=''>PT BIKININ AJA MAUNYA</div>
            <div className='font-bold '>BIKINAJA.CO OUTLET</div>
            <div className=''>Jl. Jember, Puspan, Kedaleman, Kec. Rogojampi, Kab. Banyuwangi, Jawa Timur 68462</div>
            <div className='flex justify-center space-x-2 text-2xl text-blue-950 '>
                <div className='p-1 bg-gray-200 rounded-md hover:text-white hover:bg-blue-950'>
                    <FaYoutube/>
                </div>
                <div className='p-1 bg-gray-200 rounded-md hover:text-white hover:bg-blue-950'>
                    <FaTwitter/>
                </div>
                <div className='p-1 bg-gray-200 rounded-md hover:text-white hover:bg-blue-950'>
                    <FaWhatsapp/>
                </div>
                <div className='p-1 bg-gray-200 rounded-md hover:text-white hover:bg-blue-950'>
                    <FaTiktok/>
                </div>
                <div className='p-1 bg-gray-200 rounded-md hover:text-white hover:bg-blue-950'>
                    <FaTelegram/>
                </div>
            </div>
        </div>
        <div className='hidden lg:block'>
            <div className='pb-6 text-xl italic font-bold duration-300 col'>HUBUNGI KAMI</div>
            <div className='flex flex-col gap-y-1'>
                <div className=''>
                    <strong>Email: </strong>081331096250
                </div>
                <div className=''>
                    <strong>Marketing Serly: </strong>081331096250
                </div>
                <div className=''>
                    <strong>Marketing Farhan: </strong>081331096250
                </div>
            </div>
        </div>
        <div className='hidden lg:block'>
        <div className='pb-6 text-xl italic font-bold duration-300'>DOWNLOAD KATALOG</div>
            <ButtonOrder titleButton='Katalog'/>
        </div>
        </div>
    </div>

</div>

  )
}

export default Footer