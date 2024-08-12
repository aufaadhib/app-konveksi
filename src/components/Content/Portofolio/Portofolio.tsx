import React from 'react'
import CardPortofolio from './CardPortofolio'

const Portofolio = () => {
  return (
    <div id='sectionPortofolio' className='px-24 py-16 lg:pt-24 bg-slate-200 font-open-sans'>
      <div className='text-3xl italic font-bold text-center text-teal-400'>PORTOFOLIO BIKININAJA.CO</div>
      <div className='font-thin text-center text-md '>@bikininaja.co</div>
      <div className='grid grid-cols-1 gap-3 pt-6 lg:grid-cols-6'>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
        <CardPortofolio/>
      </div>
    </div>
  )
}

export default Portofolio