import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='w-full h-auto bg-secondary'>
        <div className='w-full pt-10 pb-8'>
          <h1 className='text-center text-white font-title text-2xl'>Follow and Contact Us</h1>
          <p className='text-center text-white'>Follow us on social networks and contact our team in case of any questions</p>
        </div>
        <div className='flex justify-between sm:flex-row flex-col text-xl w-[80%] mx-auto'>
              <div className='text-white my-4 text-center'>
                    <p className='my-4'>Follow us</p>
                    <div className='flex justify-center gap-10'>
                    <a href="" className='hover:text-primary mx-auto'><FaInstagram /></a>
                    <a href="" className='hover:text-primary mx-auto'><FaFacebook /></a>
                    <a href="" className='hover:text-primary mx-auto'><FaLinkedin /></a></div>
              </div>
                   
              <div  className='text-white  my-4 text-center'>
                    <p className='my-4 text-center'>Contact us</p>
                    <a href="" className='hover:text-primary'>contact@polandthings.com</a>
              </div>

              <div  className='text-white  my-4 text-center'>
                    <p className='my-4 '>Need help</p>
                    <a href="" className='hover:text-primary'>(+48) 731 236 436</a>
              </div>
        </div>
        <div>
                  <p className='text-center text-white mt-4 text-sm'>© All rights reserved 2023</p>
        </div>
    </footer>
  )
}

export default Footer