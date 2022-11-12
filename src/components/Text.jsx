import React from 'react';

export default function Text() {
  return (
    <div className='w-[30rem] flex flex-col items-start gap-[2rem] font-epilogue'>
      <h1 className='text-[4.5rem] leading-[4rem] font-bold'>Make remote work</h1>
      <p className='w-[25rem] text-gray'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
      <button className='bg-black text-white px-8 py-4 rounded-2xl'>Learn more</button>
    </div>
  );
}
