import React from 'react'
interface FungsiButtonProps{
    titleButton:string;
}

const ButtonOrder:React.FC<FungsiButtonProps> = ({titleButton}) => {
  return (
    <div><button className='px-5 py-3 text-white duration-300 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl hover:scale-105'>
    {titleButton}
  </button></div>
  )
}

export default ButtonOrder