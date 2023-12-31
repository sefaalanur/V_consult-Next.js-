import React from 'react'
import Universities from './ui/Universities'
import universities from '@/data/universities'
import Slider from "react-slick";
const Carousel = () => {
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,


      };

  return (
    <section className='bg-secondary h-full'>
            <div className='text-center pt-12'>
                <h1 className='font-title text-3xl text-white'>UNIVERSITIES IN POLAND </h1>
            </div>

        <div className='container  mx-auto'>
            <Slider {...settings}>

          {universities.map((uni)=>(
            <Universities key={uni.id}
            img={uni.image}
            name={uni.name}/>
          ))}
            </Slider>
        </div>
    </section>
  )
}

export default Carousel