import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-success h-auto pb-10'>
      <div className='container mx-auto pt-16 flex flex-wrap gap-14'>
        <div className='mx-auto'>

        <div className='absolute z-10 md:w-[250px] md:h-[150px] w-[125px] h-[75px] md:mt-36 mt-24 md:-ml-48 -ml-8'>
                  <Image
                src='/images/hands.jpg'
                alt='oldtown'
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
                />
        </div>
        <div className='absolute z-20 md:w-[180px] md:h-[210px] w-[90px] h-[105px] md:mt-96 mt-64 md:-ml-40 -ml-12  '>
                  <Image
                src='/images/unistudents.jpg'
                alt='oldtown'
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
                />
        </div>

                <div className='flex justify-between mx-auto'>
                  <div className='relative sm:w-[300px] sm:h-[450px] w-[200px] h-[300px]'>
                  <Image
                src='/images/oldtown.jpg'
                alt='oldtown'
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
                />
              </div>
            
                <div className='relative sm:w-[250px] sm:h-[350px]  w-[150px] h-[280px] my-auto swing'>
                  <Image
                 src='/images/student.jpg'
                 alt='students'
                 layout='fill'
                 objectFit='cover'
                 className='rounded-lg'
                />             
             </div>
             </div>
        </div> 
        <div className='absolute md:-ml-8'>
        <svg width="109" height="104" viewBox="0 0 109 104" xmlns="http://www.w3.org/2000/svg" class="rotated-arrow"><path fill-rule="evenodd" clip-rule="evenodd" d="M108.069 8.19489C107.736 8.63492 107.108 8.72108 106.668 8.38732C99.1908 2.71584 89.2798 0.381478 79.6987 3.32933C75.1804 4.71948 70.6981 7.29667 66.5577 11.3002C67.584 12.4895 68.5682 13.7897 69.5044 15.204C76.5789 25.8914 78.2336 34.8353 76.789 41.6267C75.344 48.4205 70.8192 52.9249 65.8469 54.6969C60.8976 56.4607 55.3679 55.5339 52.1863 51.2533C49.0269 47.0026 48.4661 39.8148 52.5332 29.6446C55.6409 21.8732 59.499 15.8072 63.8013 11.246C57.5928 4.82745 50.0197 2.48493 42.3588 3.29494C32.8817 4.29697 23.1421 10.1429 15.6385 19.3965C0.973899 37.4815 -4.98611 68.4127 16.5367 100.393L17.6379 93.9417C17.7308 93.3973 18.2474 93.0313 18.7918 93.1242C19.3363 93.2171 19.7023 93.7338 19.6093 94.2782L18.095 103.15C18.0021 103.694 17.4855 104.06 16.941 103.967L8.06935 102.453C7.52495 102.36 7.15895 101.843 7.25187 101.299C7.34479 100.755 7.86145 100.389 8.40587 100.482L14.9357 101.596C-7.14435 68.8595 -1.14932 36.9245 14.0851 18.1368C21.8369 8.57702 32.0239 2.37652 42.1485 1.30602C50.4329 0.430097 58.5901 3.00164 65.2073 9.82357C69.5397 5.64436 74.2718 2.90653 79.1105 1.41777C89.3704 -1.73891 99.9419 0.775331 107.877 6.79383C108.317 7.12758 108.403 7.75486 108.069 8.19489ZM65.1503 12.7308C61.0819 17.0748 57.3923 22.8799 54.3902 30.3872C50.4287 40.2936 51.2435 46.6321 53.7915 50.0602C56.3173 53.4584 60.8266 54.3628 65.1755 52.813C69.5014 51.2713 73.5339 47.3173 74.8328 41.2106C76.1322 35.1014 74.7174 26.7026 67.8366 16.3079C66.9796 15.0132 66.0826 13.822 65.1503 12.7308Z"></path></svg>
              </div>  
             
        <div className='sm:w-1/3 w-1/2 mx-auto sm:my-auto my-16 sm:text-start text-center'>
                <h1 className="font-title text-4xl text-white text-center">ABOUT US</h1>
                <p className='mt-8 text-white opacity-90'>
                We are a consulting company dedicated to assisting students who aspire to study in Poland. 
                Our mission is to provide accurate and comprehensive information about educational opportunities 
                in Poland to help students make informed decisions and achieve their academic goals.
                </p>
                <p className=' mt-8 text-white font-bold'>
                At V consult, we understand that studying abroad can be a life-changing experience. Therefore,
                we strive to make the process as smooth and hassle-free as possible for our clients. Our team of 
                experienced consultants is well-versed in the Polish education system, universities, admission requirements, 
                and visa procedures. We are here to guide and support you throughout every step of your journey.
                </p>
                <button className='mt-16 sm:float-right  btn'> LEARN MORE </button>
        </div> 
      </div>
    </section>
  )
}

export default About;