
import React, { useState } from 'react';
import './MortgageCalculator.scss';
import { FiDollarSign } from "react-icons/fi";
import Navbar from '../Navbar/Navbar'

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(20);
  const [zipCode, setZipCode] = useState('80001');
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - (homePrice * (downPayment / 100));
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    return monthlyPayment.toFixed(0);
  };

  return (
      <>
         <Navbar color={'white'}/>
    <div className="mortgage-calculator">
      <h2>Mortgage Calculator</h2>
      <p>Use our mortgage calculator built directly into it! Get accurate estimates for your monthly mortgage payments if you will be required to have private mortgage insurance (PMI). Also learn why</p>
      <div className="calculator">
         <div className="top">
         <div className="home-price">
            <label htmlFor="home">Home Price</label>
            <div className="input">
             <input type="number" value={homePrice}
             onChange={(e)=> setHomePrice(e.target.value)}
             />
             <FiDollarSign size='1.5rem' className='icon'/>
            </div>
         </div>
         {/* .. */}
         <div className="monthly-payment">
          <label htmlFor="">Monthly payment</label>
           <p>
             <FiDollarSign size='1.5rem' className='icon'/>
             <span>{calculateMonthlyPayment()}/mo</span>
           </p>
         </div>
         <button>Get pre-approved</button>
         </div>
         <input type="range" value={homePrice} max="3000000" min='50000'
          onChange={(e)=> setHomePrice(e.target.value)}
          className='range'
         />
         <button>Get pre-approved</button>
         <div className="options">
            <div className="input">
              <label htmlFor="">Zip code</label>
              <input type="number"
               value={zipCode}
               onChange={(e)=> setZipCode(e.target.value)}
              />
            </div>
            {/* .. */}
            <div className="input">
              <label htmlFor="">Down payment</label>
              <input type="number"
               value={downPayment}
               onChange={(e)=> setDownPayment(e.target.value)}
              />
              <span>%</span>
            </div>
            {/* .. */}
            <div className="input">
              <label htmlFor="">Interest rate</label>
              <input type="number"
               min='1'
               max='10'
               value={interestRate}
               onChange={(e)=>setInterestRate(e.target.value)}
              />
              <span>%</span>
            </div>
            {/* .. */}
            <div className="input">
              <label htmlFor="">Length of loan</label>
              <select value={loanTerm} onChange={(e)=> setLoanTerm(e.target.value)}>
                <option value="30">30 Years</option>
                <option value="20">20 Years</option>
                <option value="15">15 Years</option>
              </select>
            </div>
            {/* .. */}
         </div>
         </div>
    </div>
      </>
  );
};

export default MortgageCalculator;
