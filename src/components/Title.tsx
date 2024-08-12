import React from 'react'

interface OurServiceProps {
    mainText: string;
    highlightText: string;
  }
const Title: React.FC<OurServiceProps> = ({ mainText, highlightText }) => {
  return (
    <>
    <div className='flex justify-center italic lg:justify-start lg:pl-28'>
        <span className='text-4xl font-bold font-open-sans lg:text-5xl'>{mainText}</span>
        <span className='ml-2 text-4xl font-bold text-teal-400 font-open-sans lg:text-5xl'>{highlightText}</span>
        </div>
    </>
  )
}

export default Title