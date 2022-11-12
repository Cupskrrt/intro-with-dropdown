import React from 'react';
import logo from '../images/logo.svg'
import arrowdown from '../images/icon-arrow-down.svg'

export default function Header() {
  return (
    <div className='flex justify-between m-7 items-center font-epilogue'>
      <img src={logo} alt="snap logo" />
      <ul className='flex gap-10 mr-[36rem] mb-[.5rem] text-gray'>
        <li className='flex gap-2'>Features <img src={arrowdown} alt="arrow down" className='mb-[.1rem]'/></li>
        <li className='flex gap-2'>Company <img src={arrowdown} alt="arrow down" className='mb-[.1rem]'/></li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className='flex gap-10 justify-center items-center text-gray'>
        <p>Login</p>
        <p className='border-[2px] border-gray px-4 py-2 rounded-xl'>Register</p>
      </div>
    </div>
  );
}
