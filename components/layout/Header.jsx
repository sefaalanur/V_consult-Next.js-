import React from 'react';
import Logo from '../ui/Logo';
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel} from "react-icons/gi";
import { useState,useEffect } from 'react';
import Link from 'next/link';
const Header = () => {
  const [isClick,setIsClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`bg-secondary transition-all sticky top-0  z-50 ${isScrolled ? 'h-[80px]' : 'h-[130px]'}`}>
      <div className='container mx-auto flex justify-between items-center h-full'>
        <Link href="/"><Logo /></Link>
        <div>
        <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen
         sm:bg-transparent bg-white sm:flex hidden  ${
            isClick === true && "!grid place-content-center"
          }`}>
          <ul className='flex md:gap-10 gap-6 sm:flex-row flex-col items-center sm:text-white text-black '>
            <li  onClick={() => setIsClick(false)} className=' hover:text-primary transition-all cursor-pointer'>
              <Link href="/about">HOME</Link>
            </li>
            <li  onClick={() => setIsClick(false)} className=' hover:text-primary transition-all cursor-pointer'>
              <Link href="/universities">UNIVERSITIES</Link>
            </li>
            <li  onClick={() => setIsClick(false)} className=' hover:text-primary transition-all cursor-pointer'>
              <Link href="/services">SERVICES</Link>
            </li>
            <li  onClick={() => setIsClick(false)} className=' hover:text-primary transition-all cursor-pointer'>
              <Link href="/contact">CONTACT</Link>
            </li>
            <li  onClick={() => setIsClick(false)} className=''>
            <div className="relative inline-block group">
                <Link href="/auth/Login" className='cursor-pointer group-hover:text-primary'><FaUserAlt/></Link>
                <div className="dropdown-content">
                <p className=' hidden group-hover:block absolute left-0 mt-0 text-center min-w-[100px] p-1s z-10'>
                  Profile
                </p>
                </div>
            </div>
            </li>
          </ul>
          {isClick && (
            <button
              className="absolute top-4 right-4 z-50 hover:text-primary"
              onClick={() => setIsClick(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        </div>
           <button onClick={()=>setIsClick(true)}
            className="sm:hidden inline-block">
            <GiHamburgerMenu className="text-2xl text-white hover:text-primary transition-all" />
          </button> 
      </div>
    </header>
  )
}

export default Header;