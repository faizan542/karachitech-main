import React from 'react'
import logo from '../images/logo2.png'
import { Link } from "react-router-dom"

function Footer() {
    let newDate = new Date().getFullYear();
    return (
        <div className='footer '>
            <div className='container py-4'>
                <div className='row justify-content-center g-3'>
                    <div className='col-md-4'>
                        <p className='footer-logo home_divs_content'><Link to='/'><img src={logo} /></Link></p>
                    </div>
                    <div className='col-md-4 '>
                        <h5>Services :</h5>
                        <p className='home_divs_content'>Web development</p>
                        <p className='home_divs_content'>Mobile Development</p>
                        <p className='home_divs_content'>Web & Mobile Design</p>
                        <p className='home_divs_content'>Graphic Design</p>
                    </div>
                    <div className='col-md-4'>
                        <h5>Connect With Us :</h5>
                        <p className='home_divs_content footer-link'><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; <a href='mailto:karachitech25@gmail.com'>karachitech25@gmail.com</a></p>
                        <p className='home_divs_content footer-link'><i class="fa fa-phone" aria-hidden="true"></i>&nbsp; <a href='tel:03162882803'>03162882803</a></p>
                        <p className='home_divs_content footer-link'><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp; <a href='#'>Karachi Tech</a></p>
                    </div>
                    {/* <hr /> */}
                </div>
                <div className='row justify-content-center my-4'>
                    <div className='col-md-12'>
                        <hr />
                        <p className='home_divs_content align-center'>Copyright © {newDate} All Rights Reserved | Karachi Tech</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;