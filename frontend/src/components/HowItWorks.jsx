import React from 'react'
import {LuUserPlus} from "react-icons/lu"
import {VscTasklist} from "react-icons/vsc"
import {BiSolidLike} from "react-icons/bi"
const HowItWorks = () => {
    return (
      <section className="howItWorks">
        <h3>Navigating Work Loom</h3>
        <div className="container">
          <div className="card">
            <div className="icon">
              <LuUserPlus />
            </div>
            <h4>Join Work Loom</h4>
            <p>
            Register for free as a job seeker or employer. Quickly set up your profile and 
            tailor it to showcase your unique skills or company culture. Start connecting with 
            opportunities tailored to your career aspirations or recruitment goals.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <VscTasklist />
            </div>
            <h4>Explore or List Opportunities</h4>
            <p>
            Dive into a vast pool of curated job listings or post your own detailed opportunities.
            Use advanced filters to discover positions that not only meet your qualifications but also 
            your career expectations, or attract the best talent that aligns with your organizational needs.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <BiSolidLike />
            </div>
            <h4>Empower Your Career or Team</h4>
            <p>
            Seamlessly manage the hiring process or navigate through job offers. Employers can 
            efficiently identify and engage top candidates, while job seekers can accept offers that 
            promise substantial growth and fulfillment in their professional journeys.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
export default HowItWorks
