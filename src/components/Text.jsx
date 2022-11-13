import React from 'react';

export default function Text() {
  return (
    <div className="mt-[1.6rem] flex flex-col justify-center items-center lg:items-start lg:justify-start">
      <h1 className="font-bold text-[2.6rem] lg:text-[4rem] lg:w-[23rem] lg:leading-[5rem] lg:mt-[5.6rem]">Make remote work</h1>
      <p className='font-medium text-[1.1rem] text-gray w-[23rem] mt-[.6rem] text-center lg:text-left lg:w-[23rem] lg:text-[1rem] lg:mr-[6rem] lg:mt-[2.5rem]'>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className='font-bold text-white px-5 py-[1rem] bg-black mt-[1.5rem] mb-[2rem] rounded-xl lg:mt-[3rem] lg:mb-[7rem] hover:bg-white hover:text-black border-2'>Learn more</button>
    </div>
  );
}
