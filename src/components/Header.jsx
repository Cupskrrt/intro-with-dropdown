import React, { useState } from 'react';
import logo from '../images/logo.svg';
import arrowdown from '../images/icon-arrow-down.svg';
import arrowup from '../images/icon-arrow-up.svg';
import FeatureDropdownItem from './FeatureDropdownItem';
import CompanyDropdownItem from './CompanyDropdownItem';

export default function Header() {
  const [featureOpen, setFeatureOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const test = () => {
    console.log('kontol');
  };

  return (
    <>
      <div className="flex justify-between m-7 items-center font-epilogue">
        <img
          src={logo}
          alt="snap logo"
        />
        <ul className="flex gap-10 mr-[36rem] mb-[.5rem] text-gray">
          <li
            className="flex gap-2 cursor-pointer"
            onClick={(e) => setFeatureOpen(!featureOpen)}>
            Features{' '}
            <img
              src={featureOpen ? arrowup : arrowdown}
              alt={featureOpen ? 'arrowup' : 'arrowdown'}
              className="mb-[.1rem]"
            />
          </li>
          <li
            className="flex gap-2 cursor-pointer"
            onClick={(e) => setCompanyOpen(!companyOpen)}>
            Company{' '}
            <img
              src={companyOpen ? arrowup : arrowdown}
              alt={companyOpen ? 'arrowup' : 'arrowdown'}
              className="mb-[.1rem]"
            />
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className="flex gap-10 justify-center items-center text-gray">
          <p>Login</p>
          <button className="border-[2px] border-gray px-4 py-2 rounded-xl">
            Register
          </button>
        </div>
      </div>

      {featureOpen && <FeatureDropdownItem />}
      {companyOpen && <CompanyDropdownItem />}
    </>
  );
}
