import React from 'react'
import CardTshirt from './CardTshirt'

const Tshirt = () => {
  return (
    <div
    id="sectionProduct" className='px-10 py-16 lg:pt-24'>
        <div className='pb-2 text-3xl font-semibold border-b-2 font-open-sans'>
            Kaos
        </div>
        <div className='flex justify-center pt-7'>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            

            <CardTshirt/>
            <CardTshirt/>
            <CardTshirt/>
            <CardTshirt/>
            <CardTshirt/>
            <CardTshirt/>
            <CardTshirt/>
            <CardTshirt/>
            <CardTshirt/>
            <CardTshirt/>

        </div>
            </div>
    </div>
  )
}

export default Tshirt