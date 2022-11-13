import React, { useState } from 'react';
import logo from '../images/logo.svg';
import arrowdown from '../images/icon-arrow-down.svg';
import arrowup from '../images/icon-arrow-up.svg';
import hamburger from '../images/icon-menu.svg';
import x from '../images/icon-close-menu.svg'
import FeatureDropdownItem from './FeatureDropdownItem';
import CompanyDropdownItem from './CompanyDropdownItem';
import Sidebar from './Sidebar';

export default function Header() {
  const [featureOpen, setFeatureOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between m-7 items-center font-epilogue text-[.9rem]">
        <img
          src={logo}
          alt="snap logo"
        />
        <ul className="gap-10 mr-[36rem] mb-[.5rem] text-gray hidden lg:flex">
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
          <li className="hover:cursor-pointer">About</li>
        </ul>
        <div>
          <img
            src={hamburgerOpen ? x : hamburger}
            className="lg:hidden"
            onClick={(e) => setHamburgerOpen(!hamburgerOpen)}
          />
        </div>
        <div className="gap-10 justify-center items-center text-gray hidden lg:flex">
          <p>Login</p>
          <button className="border-[2px] border-gray px-4 py-2 rounded-xl">
            Register
          </button>
        </div>
      </div>

      {featureOpen && <FeatureDropdownItem />}
      {companyOpen && <CompanyDropdownItem />}
      {hamburgerOpen && <Sidebar />}
    </>
  );
}
