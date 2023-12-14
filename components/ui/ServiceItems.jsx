import Link from 'next/link';
import React from 'react'

const ServiceItems = ({icon, title, content}) => {
  return (
    <div>
        <div className='flex border-primary border-4 rounded-2xl w-[350px] h-48  text-white mt-8'>
            <div className='w-1/3 h-full flex items-center rounded-l-2xl justify-center hover:text-primary bg-secondary bg-opacity-90'>
                
              <Link href="/serviceDetails#accommodation"> {icon} </Link>     
                
            </div>
            <div className='w-2/3 bg-secondary rounded-r-2xl'>
                <h1 className='text-center border-success py-3 font-title text-xl'>
                {title}
                </h1>
                <p className='p-2 pl-3'>
               {content}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ServiceItems;