import React from 'react';

function Home() {
  return (
    <>
      <div className="relative w-full sm:h-[800px] h-[500px] bg-black">
        <img src="bg1.jpg" className='absolute inset-0 w-full h-full object-cover sm:brightness-[0.2] brightness-[0.4]' alt="" srcset=""/>
        <div className='absolute sm:mt-20 mt-32 flex flex-col justify-center align-middle sm:gap-10 gap-5'>
          <div className='flex justify-center shadow-lg select-none'>
            <img src="Logo.png" className="h-fill sm:w-[30%] w-[40%]" alt="Flowbite Logo" />
          </div>
          <div className='flex justify-center select-none'>
            <h1 className='text-white lg:text-6xl md:text-4xl text-lg'>BANI SINGH INTERNATIONAL SCHOOL</h1>
          </div>
          <div className='flex justify-center select-none'>
            <h4 className='text-white lg:text-2xl md:text-xl text-xs'>IGLAS MATHURA ROAD, ALIGARH</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;