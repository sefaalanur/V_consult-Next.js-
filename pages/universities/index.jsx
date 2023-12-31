import React from 'react'
import Image from 'next/image';
import universities from '@/data/universities';
const index = () => {


  return (
    <div className='container mx-auto my-12'>
         <div>
  <ul>
      {universities.map((uni)=>(
        <li key={uni.id} className='my-10'>
           <div >
        <div className='flex flex-wrap  gap-8'>
        <Image 
            src={uni.image}
            alt={uni.id}
            width={250}
            height={125}
            layout="intrinsic"
            /> 
            <div>
            <a href={uni.website} target="_blank" className='hover:underline cursor-pointer font-title text-2xl'>{uni.name}</a>
            <ul className='ml-10 mt-3 list-disc'>
              <li className='mb-2'>{uni.programme}</li>
              <li className='mb-2'>{uni.programme2}</li>
              <li className='mb-2'>{uni.programme3}</li>
            </ul>
            </div>
 
 </div>
     <div className='my-10'>
        <div className='flex sm:flex-row flex-col justify-between'>
         <ul>
           <li className='mb-2'><span className='font-bold'>Field: </span>{uni.programme}</li>
           <li className='mb-2'><span className='font-bold'>Duration: </span>{uni.duration}</li>
           <li className='mb-2'><span className='font-bold'>Tuition fee: </span>{uni.price}</li>
           <li className='mb-2'><span className='font-bold'>Study mode: </span>{uni.mode}</li>
           <li className='mb-2'><span className='font-bold'>Credits: </span>{uni.credits}</li>
         </ul>
         <ul>
           <li className='mb-2'><span className='font-bold'>Field: </span>{uni.programme2}</li>
           <li className='mb-2'><span className='font-bold'>Duration: </span>{uni.duration2}</li>
           <li className='mb-2'><span className='font-bold'>Tuition fee: </span>{uni.price2}</li>
           <li className='mb-2'><span className='font-bold'>Study mode: </span>{uni.mode2}</li>
           <li className='mb-2'><span className='font-bold'>Credits: </span>{uni.credits2}</li>
         </ul>
         <ul>
           <li className='mb-2'><span className='font-bold'>Field: </span>{uni.programme3}</li>
           <li className='mb-2'><span className='font-bold'>Duration: </span>{uni.duration3}</li>
           <li className='mb-2'><span className='font-bold'>Tuition fee: </span>{uni.price3}</li>
           <li className='mb-2'><span className='font-bold'>Study mode: </span>{uni.mode3}</li>
           <li className='mb-2'><span className='font-bold'>Credits: </span>{uni.credits3}</li>
         </ul>
         </div>                         
     </div>   
     <hr />               
    </div>
 </li>
                            
              ))}
          </ul>
            
         </div>
    </div>
  )
}

export default index