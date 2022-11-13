import React, { useState } from 'react';
import arrowdown from '../images/icon-arrow-down.svg';
import arrowup from '../images/icon-arrow-up.svg';
import FeatureExpandItem from './FeatureExpandItem';
import CompanyExpandItem from './CompanyExpandItem';

export default function Sidebar() {
  const [featureExpand, setFeatureExpand] = useState(false);
  const [companyExpand, setCompanyExpand] = useState(false);

  return (
    <>
      <div className="absolute bg-white items-center justify-center w-[60%] h-[80vh] top-[4rem] left-[14.5rem]">
        <div className="">
          <div className="flex flex-col text-start items-start gap-[2rem] ml-[2rem] mt-[2rem] mb-[3rem] text-gray">
            <button
              className="flex items-center gap-3"
              onClick={(e) => setFeatureExpand(!featureExpand)}>
              Feature{' '}
              <img
                src={featureExpand ? arrowup : arrowdown}
                alt="closed"
              />
            </button>
            {featureExpand && <FeatureExpandItem />}
            <button
              className="flex items-center gap-3"
              onClick={(e) => setCompanyExpand(!companyExpand)}>
              Company{' '}
              <img
                src={companyExpand ? arrowup : arrowdown}
                alt="closed"
              />
            </button>
            {companyExpand && <CompanyExpandItem />}
            <p>Careers</p>
            <button>About</button>
          </div>
          <div className="flex flex-col gap-5 text-gray items-center">
            <button>Login</button>
            <button className="border-2 p-3 w-[18rem] rounded-xl">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
