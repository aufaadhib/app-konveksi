import React from 'react'
import CardHoodie from './CardHoodie'

const Hoodie = () => {
  return (
    <div className='px-10 py-16 lg:pt-24'>
        <div className='pb-2 text-3xl font-semibold border-b-2 font-open-sans'>
            Hoodie
        </div>
        <div className='flex justify-center pt-7'>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-5'>
            <CardHoodie/>
            <CardHoodie/>
            <CardHoodie/>
            <CardHoodie/>
            <CardHoodie/>
            <CardHoodie/>
            <CardHoodie/>
            <CardHoodie/>
            <CardHoodie/>
            <CardHoodie/>
        </div>
            </div>
    </div>
  )
}

export default Hoodie