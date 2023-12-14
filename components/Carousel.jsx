import React from 'react'
import Universities from './ui/Universities'
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
                <h1 className='font-title text-3xl  text-white'>UNIVERSITIES IN POLAND </h1>
            </div>
              
        <div className='container  mx-auto'>
            <Slider {...settings}>

        <Universities 
        img="/images/politechnika.jpg"
        content={'Warsaw University of Technology'}/>

        <Universities 
        img="/images/wsb.jpg"
        content={'WSB Merito University Warsaw'}/>

        <Universities 
        img="/images/lazarski.jpg"
        content={'Lazarski University'}/>
                    
            </Slider>
        </div>
    </section>
  )
}

export default Carousel