import React from 'react';
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';

export default function Sponsors() {
  return (
    <div className='flex gap-[3rem] mt-[7rem]'>
      <img
        src={databiz}
        alt="Databiz Logo"
      />
      <img
        src={audiophile}
        alt="Audiophile Logo"
      />
      <img
        src={meet}
        alt="Meet Logo"
      />
      <img
        src={maker}
        alt="Maker Logo"
      />
    </div>
  );
}
