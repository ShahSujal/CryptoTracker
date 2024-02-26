"use client"
// custom carousel i created 
import Image from 'next/image'
import React,{useCallback, useRef} from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const scroll = (containerRef: React.RefObject<HTMLDivElement>, distance: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: distance,
        behavior: 'smooth',
      });
    }
  };
  
const Cards = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollLeft = useCallback(() => scroll(containerRef, -200), []);
    const scrollRight = useCallback(() => scroll(containerRef, 200), []);
  
  return (
    <div className=' w-full relative '>
           <div className='absolute right-0 top-1/4 w-10 h-10 bg-[#ffffff3a] backdrop-blur-lg p-2 rounded-full flex justify-center z-10 items-center cursor-pointer'>
            <MdKeyboardArrowRight onClick={scrollRight} color='black'/>
        </div>
        <div className='absolute left-0 top-1/4  z-10 w-10 h-10 bg-[#ffffff3a] backdrop-blur-lg p-2 rounded-full flex justify-center items-center cursor-pointer'>
            <MdKeyboardArrowLeft onClick={scrollLeft} color='black'/>
        </div>
    <div className=" w-full h-[250px] overflow-x-auto relative flex flex-row" ref={containerRef} style={{scrollbarWidth:"none"}}>
     
    <div className=" min-w-[550px] h-[220px] mx-4 bg-[#E8F4FD] flex justify-center items-start flex-row rounded-lg p-4">
      <div className="">
        <Image src={'/news.png'} alt="" width={200} height={200} className=" w-8 h-8 p-1 bg-[#0082FF] rounded-full mr-2"/>
      </div>
      <div className=" w-10/12 h-full flex flex-col ">
        <h1 className=" text-[#191C1F] text-[14px] font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h1>
        <h3 className="text-[#3E5765] text-[14px] ">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</h3>
      </div>
    </div>
    <div className=" min-w-[550px] h-[220px] mx-4 bg-[#E8F4FD] flex justify-center items-start flex-row rounded-lg p-4">
      <div className="">
        <Image src={'/arrow.png'} alt="" width={200} height={200} className=" w-8 h-8 p-1 bg-[#0FBA83] rounded-full mr-2"/>
      </div>
      <div className=" w-10/12 h-full flex flex-col ">
        <h1 className=" text-[#191C1F] text-[14px] font-medium">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h1>
        <h3 className="text-[#3E5765] text-[14px] ">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</h3>
      </div>
    </div>

  </div>
  </div>
  )
}

export default Cards