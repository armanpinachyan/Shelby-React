import React, { Component } from "react";
import Slider from "react-slick";
import Destination from "../Destinations/Destination";
import Gallery from "../Gallery/Gallery";
import Sale from "../Sale/Sale";
import Summer from "../Summer/Summer";
import './Home.css'

export default function SimpleSlider () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: 500,
      autoplaySpeed: 1000,
    };
    return (
      <div className="home" id="home" >
        <Slider {...settings} >
          <div>
            <div className="home1" >
            </div>
          </div>
          <div>
            <div className="home2" >
            <div className="text">
                    <h2>EXPLORE SOUTH AMERICA <hr /> UNDER 1000%</h2>
                <button className="btn" >LOCATIONS</button>
              </div>
            </div>
          </div>
          <div>
            <div className="home3" ></div>
          </div>
        </Slider>
        <Destination/>
        <Summer/>
        <Gallery/>
        <Sale/>
      </div>
    );

}
