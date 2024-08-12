import React from 'react'
import CardOrder from './CardOrder'
import ButtonOrder from '../../ButtonOrder'

const HowToOrder = () => {
  return (
    
    <div id='sectionHowToOrder' className='px-5 py-16  lg:pt-24 lg:px-24 bg-gradient-to-br from-teal-400 to-cyan-600'>
        <div className='text-center text-white font-open-sans' >
        <h1 className='pb-5 text-3xl italic'>Easy Way To Order</h1>
        <ButtonOrder titleButton='Order Now'/>
        <p className='hidden pt-5 lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto labore praesentium? Cupiditate, tempora ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio incidunt officiis, assumenda vel ipsum eligendi nesciunt fuga nulla reiciendis. Eos!</p>
        </div>
        <br />
        <div className="flex items-center justify-around my-5 text-xl font-bold font-open-sans">
            <div className="flex-grow border-t border-white"></div>
                <span className="flex items-center justify-center flex-shrink w-12 h-12 text-center bg-white rounded-full">1</span>
            <div className="flex-grow border-t border-white"></div>
            <div className="flex-grow border-t border-white"></div>
                <span className="flex items-center justify-center flex-shrink w-12 h-12 text-center bg-white rounded-full">2</span>
            <div className="flex-grow border-t border-white"></div>
            <div className="flex-grow border-t border-white"></div>
                <span className="flex items-center justify-center flex-shrink w-12 h-12 text-center bg-white rounded-full">3</span>
            <div className="flex-grow border-t border-white"></div>
            <div className="flex-grow border-t border-white"></div>
                <span className="flex items-center justify-center flex-shrink w-12 h-12 text-center bg-white rounded-full">4</span>
            <div className="flex-grow border-t border-white"></div>
        </div>
        <div className="flex items-start justify-around space-x-3 text-xl lg:my-8 ">
                <CardOrder mainText='Konsultasi & Mengisi Form'/>
                <CardOrder mainText='Pembayaran DP & Persetujuan SPK'/>
                <CardOrder mainText='Proses Produksi'/>
                <CardOrder mainText='Pelunasan dan Pengiriman'/>
                
        </div>
        

    </div>
  )
}

export default HowToOrder