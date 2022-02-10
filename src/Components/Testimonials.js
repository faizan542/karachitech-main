import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../images/client-logo/clients-1.jpg"
import client2 from "../images/client-logo/clients-2.jpg"
import client3 from "../images/client-logo/clients-3.jpg"



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="fa fa-arrow-right"
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="fa fa-arrow-left "
            onClick={onClick}
        />
    );
}

export default class Testimonials extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
            // responsive: [
            //     {
            //       breakpoint: 1024,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         dots: true
            //       }
            //     },
            //     {
            //       breakpoint: 600,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         // initialSlide: 1
            //       }
            //     },
            //     {
            //       breakpoint: 480,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
        };
        return (
            <div className='container testimonial-slider'>
                <h2>Testimonials</h2>
                <Slider {...settings}>
                    <div>
                        <p className='testim-para '><img className='testimonial-img' src={client1} /></p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <h3>Client 1</h3>
                    </div>
                    <div>
                        <p className='testim-para'><img className='testimonial-img' src={client2} /></p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <h3>Client 2</h3>
                    </div>
                    <div>
                        <p className='testim-para'><img className='testimonial-img' src={client3} /></p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <h3>Client 3</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
