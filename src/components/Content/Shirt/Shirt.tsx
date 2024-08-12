import React from 'react'
import CardShirt from './CardShirt'

const Shirt = () => {
  return (
    <div id='shirtSection' className='px-10 py-16 lg:pt-24'>
        <div className='pb-2 text-3xl font-semibold border-b-2 font-open-sans '>
            Kemeja
        </div>
        <div className='flex justify-center pt-7'>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            

            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>
            <CardShirt/>

        </div>
            </div>
    </div>
  )
}

export default Shirt