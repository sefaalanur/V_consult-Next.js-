import React from 'react'
import Image from 'next/image'
const Universities = ({img, content}) => {
  return (
    <div className="flex flex-col items-center gap-12 my-20">
       <div
      className="relative w-[60%] sm:h-64 h-44 flex justify-center">
      <Image
        src={img}
        alt=""
        objectFit="cover"
        layout='fill'
        className="rounded-xl"
      />
    </div>
    <div className="text-center p-6 bg-success text-white rounded-[10px] sm:w-[30%] :w-1/2 sm:h-auto h-auto">
      <p>
      {content}
      </p>
    </div>
  </div>
  )
}

export default Universities;