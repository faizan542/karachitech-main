import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Header';
import Footer from './footer';
import aboutimg from "../images/about/about-2.webp";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials"

function Home() {
  return (
    <div>
      <Header />
      <div id='home'>

        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src="https://store.unity.com/themes/store/images/products/unity/personal/unity-assetstore.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='text-center'>First slide label</h3>
              <p className='text-center'>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src="https://assets.vccircle.com/uploads/2019/08/Technologyrfxllargex.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel"
              src="https://licreativetechnologies.com/wp-content/uploads/2020/01/Startup-business.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className='container'>
          <h3 className='text-center'>What do we offer</h3>
          <div className='row g-3'>
            <div className='col-md-4'>
              <div className='home_divs'>
                <i class="fa fa-clock-o icon-1" aria-hidden="true"></i>
                <p className='home_divs_heading'>Time Management</p>
                <p className='home_divs_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='home_divs'>
                <i class="fa fa-lock icon-1" aria-hidden="true"></i>
                <p className='home_divs_heading'>Responisive Design</p>
                <p className='home_divs_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='home_divs'>
                <i class="fa fa-envelope-o icon-1" aria-hidden="true"></i>
                <p className='home_divs_heading'>Mail Support</p>
                <p className='home_divs_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
              </div>
            </div>
          </div>
          <div className='row g-3'>
            <div className='col-md-6'>
              <p><img className='about_image' src={aboutimg} /></p>
            </div>
            <div className='col-md-6'>
              <h3 className='about-heading'>After all it’s all about why choose us?</h3>
              <p>The Karachi Tech is an online digital agency and we give different quality digital
                  services to our esteemed clients. We have specialized team having expertise in Web
                  Applications development and Mobile Application development. We provide solution to our
                  esteemed clients in thier businesses.</p>
                  <p>Our group is built on the premise that we have the best people in all related fields,
                  because we provide a wide range of solutions in all related fields, providing our
                  expertise to outclass all group brands.</p>
              <p><Link className='home-sec-about' to="about">Learn more</Link></p>
            </div>
          </div><br />
        <Testimonials /><br />
        </div>
        <br />
        
        <Footer />
      </div>
    </div>


  )
}
export default Home;