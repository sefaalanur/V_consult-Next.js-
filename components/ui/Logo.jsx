import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <div className='relative w-full h-auto inline-block'>
          <Image
          src="/images/V_logo.png"
          alt="logo"
          width={228}
          height={154}
          />
        </div>
  )
}

export default Logo;