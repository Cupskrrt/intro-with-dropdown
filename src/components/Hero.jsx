import React from 'react';
import heroImageDesktop from '../images/image-hero-desktop.png';
import heroImageMobile from '../images/image-hero-mobile.png';

export default function Hero() {
  return (
    <>
      <img
        src={heroImageMobile}
        alt="hero"
        className='max-w-screen lg:hidden'
      />

      <img
        src={heroImageDesktop}
        alt="Hero"
        className='hidden lg:flex w-[28rem]'
      />
    </>
  );
}
