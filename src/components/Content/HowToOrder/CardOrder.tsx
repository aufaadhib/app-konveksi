import React from 'react'

interface CardOrderProps {
    mainText: string;
  }

const CardOrder:React.FC<CardOrderProps> = ({mainText}) => {
  return (
    <>
    
    <div className='flex flex-col items-center justify-center px-1 bg-white shadow-2xl lg:pb-5 lg:px-5 rounded-xl font-open-sans'>
        <div>
            <img className='hidden lg:block' src="/images/svgcontoh.jpg" alt="" />
        </div>
        <div className='text-sm font-thin text-center lg:font-bold max-w-32'>{mainText}</div>
                    <p className='hidden text-sm font-thin lg:block'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quisquam voluptatum aspernatur rem modi neque. </p>
                </div>
    </>
    
  )
}

export default CardOrder