import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import ContentFaq from './ContentFaq';


const Faq:React.FC = () => {

  return (

    <div className='min-h-screen px-5 py-16 text-center lg:pt-24 bg-slate-200'>
        <div className='pb-6 text-3xl font-bold text-teal-400 lg:text-3xl font-open-sans'>Yang Sering Ditanyakan</div>
        <div className='flex justify-center'>
            <div className='grid grid-cols-2'>
                <ContentFaq Answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum, exercitationem doloremque rem vero quisquam saepe voluptatum quibusdam earum possimus!' Question='TES' />
                <ContentFaq Answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum, exercitationem doloremque rem vero quisquam saepe voluptatum quibusdam earum possimus!' Question='TES' />
                <ContentFaq Answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum, exercitationem doloremque rem vero quisquam saepe voluptatum quibusdam earum possimus!' Question='TES' />
                <ContentFaq Answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum, exercitationem doloremque rem vero quisquam saepe voluptatum quibusdam earum possimus!' Question='TES' />
            </div>
        </div>
    </div>
  )
}

export default Faq