import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      position: 'absolute',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 10000,
      cssEase: "linear"
    };
    return (
      <section className="header pt-lg-30 pb-20">
        <div className="container-xxl container-fluid">
          <div className="gap-lg-0 gap-5 mb-30 pe-30 ps-30">
            <Slider {...settings}>
              <div className="d-flex justify-content-lg justify-content-center me-lg-5" data-aos="zoom-in">
                <Image src="/img/mainBanner1.jpg" className="img-fluid rounded" width={750} height={520} alt="" />
              </div>
              <div className="d-flex justify-content-lg justify-content-center me-lg-5">
                <Image src="/img/mainBanner2.jpg" className="img-fluid rounded" width={750} height={520} alt="" />
              </div>
              <div className="d-flex justify-content-lg justify-content-center me-lg-5">
                <Image src="/img/mainBanner3.jpg" className="img-fluid rounded" width={750} height={520} alt="" />
              </div>
              <div className="d-flex justify-content-lg justify-content-center me-lg-5">
                <Image src="/img/mainBanner4.jpg" className="img-fluid rounded" width={750} height={520} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
