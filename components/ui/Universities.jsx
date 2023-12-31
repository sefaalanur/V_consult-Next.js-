import React from 'react'
import Image from 'next/image'
const Universities = ({img, name}) => {
  return (
    <div className="flex flex-col items-center gap-12 my-24">
       <div
      className="relative flex justify-center">
      <Image
        src={img}
        alt="university"
        width={750}
        height={325}
        layout="intrinsic"
        className='rounded-md'
      />
    </div>
    <div className="text-center p-6 bg-success text-white rounded-[10px] sm:w-[30%] :w-1/2 sm:h-auto h-auto">
      <p>
      {name}
      </p>
    </div>
  </div>
  )
}

export default Universities;