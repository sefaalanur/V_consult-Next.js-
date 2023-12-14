import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <div className='relative w-full h-auto inline-block'>
          <Image
          src="/images/logo.png"
          alt="logo"
          width={208}
          height={144}
          />
        </div>
  )
}

export default Logo;