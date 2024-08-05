import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="better-section">
      <div className="better-heading">
        <h1>Better</h1>
        <p>Better is a family of companies serving all your homeownership needs.</p>
      </div>
       <div className="all-sec">
       <div className="better-services">
        <div className="service">
          <h2>Better <span>Mortgage</span></h2>
          <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
        </div>
        <div className="service">
          <h2>Better <span>Real Estate</span></h2>
          <p>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
        </div>
        <div className="service">
          <h2>Better <span>Cover</span></h2>
          <p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
        </div>
        <div className="service">
          <h2>Better <span>Inspect</span></h2>
          <p>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
        </div>
        <div className="service">
          <h2>Better <span>Settlement Services</span></h2>
          <p>Get transparent rates when you shop for title insurance all in one convenient place.</p>
        </div>
      </div>
        <section className='options'>
        <div className="better-resources">
        <h3>Resources</h3>
        <ul>
          <li>Home affordability calculator</li>
          <Link to='/calc' title='active link'><li>Mortgage calculator</li></Link>
          <li>Free mortgage calculator</li>
          <li>Mortgage calculator with taxes</li>
          <li>Mortgage calculator with PMI</li>
          <li>Rent vs buy calculator</li>
          <li>HELOC payment calculator</li>
          <li>HELOC vs cash-out refinance calculator</li>
          <li>Buy a home</li>
          <li>Sell a home</li>
          <li>Get a home inspection</li>
        </ul>
      </div>
      <div className="better-company">
        <h3>Company</h3>
        <ul>
          <Link to='/about' title='active link'><li>About Us</li></Link>
          <li>Careers</li>
          <li>Media</li>
          <li>Partner With Us</li>
          <li>Learning center</li>
          <li>FAQs</li>
          <li>Investor Relations</li>
        </ul>
      </div>
      <div className="better-contact">
        <h3>Contact Us</h3>
        <ul>
          <li>hello@better.com</li>
          <li>415-523-8837</li>
          <li>FAQ</li>
          <li>Glossary</li>
        </ul>
      </div>
      <div className="better-legal">
        <h3>Legal</h3>
        <ul>
          <li>NMLS Consumer Access</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Disclosures & Licensing</li>
          <li>Affiliated Business</li>
          <li>Browser support</li>
        </ul>
      </div>
        </section>
       </div>
      <footer className="better-footer">
        <p>
          © 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
        </p>
        <p>
          Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a href="https://better.com/nmls-consumer-access">NMLS Consumer Access</a>
        </p>
        <p>
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC's <a href="https://better.com/license-numbers">license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
        </p>
        <p>
          <a href="https://better.com/new-york-state-fair-housing-notice">New York State Fair Housing Notice</a>
          <br />
          <a href="https://better.com/new-york-standard-operating-procedures">New York Standard Operating Procedures</a>
        </p>
        <p>
          Texas Real Estate Commission: <a href="https://better.com/information-about-brokerage-services">Information About Brokerage Services</a> | <a href="https://better.com/consumer-protection-notice">Consumer Protection Notice</a>
        </p>
        <p>
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
        </p>
        <p>
          Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
        </p>
        <p>
          Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC's <a href="https://better.com/license-numbers">license numbers</a>.
        </p>
        <p>
          Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>
        <p>
          Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, LLC dba Better Attorney Match, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
        </p>
        <p>
          Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U.S. Patent and Trademark Office. Better Cover is a federally registered service mark of Better Cover, LLC.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
