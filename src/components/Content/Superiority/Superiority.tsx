import React from 'react';
import { motion } from 'framer-motion';

interface ContentSupriorityProps {
  title: string;
  contentText: string;
  subContentText: string;
  reverse?: boolean;
}
const variants = {
  hidden: { opacity: 0, transform: 'translateX(100px)' },
  visible: { opacity: 1, transform: 'translateX(0px)' },
};

const variantsReverse = {
  hidden: { opacity: 0, transform: 'translateX(0px)' },
  visible: { opacity: 1, transform: 'translateX(100px)' },
};

const Superiority: React.FC<ContentSupriorityProps> = ({ title, contentText, subContentText, reverse = false }) => {
  return (
    <div id='superioritySection' className='px-10 py-6 overflow-hidden'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={reverse? variants:variantsReverse}
        transition={{ duration: 2, ease: 'easeOut' }}
        className={`flex flex-col  ${reverse ? 'lg:flex-row-reverse lg:ml-32' : 'lg:flex-row lg:mr-32'} bg-slate-200 rounded-2xl`}
      >
        <div className='flex-1 '>
          <img
            src="/images/visualisasi-desain-baju.jpg"
            alt="Desain Baju"
            className={`object-cover w-full h-full rounded-t-2xl   ${reverse ? 'lg:rounded-r-2xl lg:rounded-l-none' : 'lg:rounded-l-2xl lg:rounded-r-none'}`}
          />
        </div>
        <div className={`flex flex-col justify-center flex-1 py-2 text-sm text-center  px-14 font-open-sans ${reverse ? 'lg:text-start' : 'lg:text-end'}`}>
          <h1 className='mb-4 text-xl font-bold text-teal-400 lg:text-2xl'>{title}</h1>
          <p className='mb-4 text-justify'>
            {contentText}
          </p>
          <p className='text-justify'>
            {subContentText}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Superiority;
