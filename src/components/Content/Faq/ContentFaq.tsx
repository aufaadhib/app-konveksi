import React, { useState, FC } from 'react';
import { FaAngleDown } from 'react-icons/fa';

interface FaqContent {
    Question: string;
    Answer: string; // Memperbaiki ejaan
}

const ContentFaq: FC<FaqContent> = ({ Question, Answer }) => {
    const [isOpen, setIsOpen] = useState(false); // Menambahkan state untuk toggling

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
      <div>
        <div className='flex flex-col bg-white rounded-2xl'>
            <div className='flex items-center cursor-pointer' onClick={handleToggle}>
                <div className={`text-3xl text-teal-400 font-extralight transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <FaAngleDown />
                </div>
                <div className='ml-2 text-lg font-semibold'>
                    {Question}
                </div>
            </div>
            {isOpen && (
                <div className='px-[30px] text-justify mt-2 '>
                    {Answer}
                </div>
            )}
        </div>
      </div>
        
    );
};

export default ContentFaq;
