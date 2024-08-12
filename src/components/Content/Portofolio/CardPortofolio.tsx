import { motion } from 'framer-motion'
import React from 'react'

const variants = {
  hidden: { opacity: 0},
  visible: { opacity: 1},
};

const CardPortofolio = () => {
  return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}

        
        >
          <img className='shadow-xl ring-white ring-2 shadow-teal-100' src="images/portofolio.jpg" alt="porofolio2" />
        </motion.div>
  )
}

export default CardPortofolio