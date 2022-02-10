import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from 'emailjs-com';
import Header from './Header';
import Footer from './footer';
import { Link } from "react-router-dom";

function Contact() {


  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_41aku05',
     'template_dtkl2nf',
      e.target,
       'user_JQEahkonvmz5pyxXYWjxc');
    if (!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field");
    } else {
      // firebaseDB.child("contacts").push(state);
      setState({ name: "", email: "", subject: "", message: "" });
      toast.success("Your message has been sent successfully");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>    
      <Header />
    <div id='contact'>
    <div className='backgroung-img'>
              <h2 className='text-center position'>Contact us</h2>
              <p className='text-center position'><Link className='bg-link' to='/'>Home</Link> | Contact</p>
            </div>
      <section className="contact-section">
        <div className="container">
          <ToastContainer position="top-center" />
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                      <h3>Contact us</h3>
                      <p className="mb-4">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        {/* <div className="icon d-flex align-items-center justify-content-center">
                          <p><span className="fa fa-map-marker">&nbsp;&nbsp; Address: 198 West 21th Street, Suite 721
                            New York NY 10016</span></p>
                        </div> */}
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center text ">
                          <p><span className="fa fa-phone">&nbsp;&nbsp; Phone: <a className='contact-link' href="tel:03162882803">03162882803</a></span></p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <p><span className="fa fa-envelope-o ">&nbsp;&nbsp; Email: <a className='contact-link' href="mailto:karachitech25@gmail.com">
                          karachitech25@gmail.com
                            </a></span></p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <p><span className="fa fa-facebook">&nbsp;&nbsp; Facebook: <a className='contact-link' href="#">
                          Karachi Tech
                            </a></span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">Send us a message</h3>
                      <form
                        id="contactForm"
                        className="contactForm"
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={handleInputChange}
                                value={name}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                onChange={handleInputChange}
                                value={email}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                placeholder="Subject"
                                onChange={handleInputChange}
                                value={subject}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                type="text"
                                className="form-control"
                                name="message"
                                placeholder="Message"
                                cols="30"
                                rows="6"
                                onChange={handleInputChange}
                                value={message}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>
      </div>
      <Footer />
    </div>

  )
}
export default Contact;