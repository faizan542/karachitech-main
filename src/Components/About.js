import React from 'react';
import Header from './Header';
import Footer from './footer';
import { Link } from "react-router-dom";
import aboutImg1 from '../images/about/about.jpg';


function About() {
  return (
    <div>
      <Header />
      <div id='about'>
        <div className='backgroung-img'>
          <h2 className='text-center position'>About us</h2>
          <p className='text-center position'><Link className='bg-link' to='/'>Home</Link> | About</p>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <br />
                <p>The Karachi Tech is an online digital agency and we give different quality digital
                  services to our esteemed clients. We have specialized team having expertise in Web
                  Applications development and Mobile Application development. We provide solution to our
                  esteemed clients in thier businesses.</p>
                <p>Our group is built on the premise that we have the best people in all related fields,
                  because we provide a wide range of solutions in all related fields, providing our
                  expertise to outclass all group brands.</p>
                <p>We are committed to providing timely services. Therefore, we take time in advance to
                  clearly understand your needs and then manage the projects to ensure that they
                  delivered on time and within budget.</p>
              </div>
            </div>

            <div className='col-md-6 about_image_col'>
              <div>
              <img className='about_image' src={aboutImg1}  />
              </div>
            </div>
          </div>
        </div>
      </div><br />
      <Footer />
    </div>

  )
}
export default About