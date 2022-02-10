import React from 'react';
import Header from './Header';
import Footer from './footer';
import { Link } from "react-router-dom";


function Services() {
  return (
    <div>
      <Header />
      <div id='services'>
        <div className='backgroung-img'>
          <h2 className='text-center position'>Services</h2>
          <p className='text-center position'><Link className='bg-link' to='/'>Home</Link> | Services</p>
        </div><br />
        <div className='container'>
          <div className='row g-3'>
            <div className='col-md-4'>
              <div className='service_div_web'>
                <i class="fa fa-globe icon-1" aria-hidden="true"></i>
                <p className='home_divs_heading'>Web Development</p>
                <p className='home_divs_content'>Web platform has growing since its acceptation and the demand for showcase your brand
                  The right website influences engagement with the visitors and allures more business by setting the brand apart.
                  Our web development services open the potential for such benefits as:
                  Growth of Customer/User Base
                  New Digital and Business Channels
                  Increase in Conversions</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='service_div_graphic'>
                <i class="fa fa-briefcase graphic_icon" aria-hidden="true"></i>
                <p className='home_divs_heading'>Graphic Design</p>
                <p className='home_divs_content'>Our work encompasses graphics and identity, products and packaging, exhibitions, advertising and communication. Our structure is unique. We are the only major design studio where the owners of the business are the creators of the work and serve as the primary contact for every client.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='service_div_mobile'>
                <i class="fa fa-mobile icon-1" aria-hidden="true"></i>
                <p className='home_divs_heading'>Mobile App Development</p>
                {/* <p className='home_divs_content'>The world is going mobile, as if that’s news. So why not
                 be a part of the fastest growing market in the world, and create an app – together,
                  that is a reflection of innovation and perfection. We do extreme research on market
                   that what is the actual demand of today's market and how to present your brand
                    that matches the expectations of real market user of that particular thing.</p> */}
                <p className='home_divs_content'>The world is going mobile, as if that’s news. So why not
                  be a part of the fastest growing market in the world, and create an app – together. We at
                  CreativeSouls recognize that every business is unique, therefore We tailor all of our
                  mobile application solutions to meet your specific business needs, providing an
                  amazing user-end experience with a creative UI.</p>
              </div>
            </div>
          </div>
        </div><br />
        {/* <Container>
          <Row id="services">
          <Col  className="homeDiv">Services</Col>
          </Row>
          </Container> */}
        <Footer />
      </div>
    </div>

  )
}
export default Services;