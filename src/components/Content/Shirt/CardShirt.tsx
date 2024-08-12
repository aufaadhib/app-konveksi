import { motion } from 'framer-motion'
import React from 'react'

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const CardTshirt = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={variants}
        transition={{ duration: 1, ease: 'easeOut' }} className='flex flex-col items-center overflow-hidden font-open-sans'>
        <img src="/images/pdh.jpg" className='w-60'/>
        <div className='font-bold text-gray-600'>Tes</div>
        <div className='font-thin text-gray-500'>S-3XL | Min. Order 200 pcs</div>
        <div className='font-extralight'>Harga Mulai Rp33.000</div>
        
    </motion.div>
  )
}

export default CardTshirt