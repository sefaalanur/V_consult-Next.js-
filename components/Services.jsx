import React from 'react'
import ServiceItems from './ui/ServiceItems'
import {AiOutlineHome} from 'react-icons/ai'
import {TbSchool} from 'react-icons/tb'
import {MdWorkOutline} from 'react-icons/md'
import {PiNotebookBold} from 'react-icons/pi'
import {GiHealthIncrease} from 'react-icons/gi'
import {HiTrendingUp} from 'react-icons/hi'
import Link from 'next/link'
  const Services = () => {

  return (
    <div className='w-full h-auto bg-success py-6'>
        <div className='container mx-auto  py-12'>
           <h1 className='text-center font-title text-3xl text-white'> <u>OUR SERVICES </u></h1> 
           <p className='text-center mt-4 hover:text-secondary underline uppercase text-sm'><Link href='/serviceDetails'>details</Link></p>
        </div>
        <div className='container mx-auto pb-10'>
        <div className='lg:grid  lg:grid-cols-3 flex flex-wrap gap-10 mx-auto'>
        <ServiceItems 
        icon={<AiOutlineHome size={45}/>}
        link="accommodation"
        title="Accommodation"
        content="Our education agency helps you find the best accommodation throughout your university life."
        />
          <ServiceItems 
        icon={<TbSchool size={45}/>}
        link="education"
        title="Education"
        content="As you continue your university finding process, we share with you our recommendations for educational life in Poland."
        />
          <ServiceItems 
        icon={<MdWorkOutline size={45}/>}
        link="work"
        title="Work"
        content="Be able to work during your education"
        />
        <ServiceItems 
        icon={<PiNotebookBold size={45}/>}
        link="legal"
        title="Legal Process"
        content="Our agency provides you with consultancy services and residence permit support during your visa period in Poland."
        />
          <ServiceItems 
        icon={<GiHealthIncrease size={45}/>}
        link="insurance"
        title="Insurance"
        content="Our education agency provides to find best accommodation opportunities during university life."
        />
          <ServiceItems 
        icon={<HiTrendingUp size={45}/>}
        link="consulting"
        title="Consulting"
        content="Our education agency provides to find best accommodation opportunities during university life."
        />
        </div>
        </div>
    </div>
  )
}

export default Services