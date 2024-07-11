// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import Iphone1 from "../assets/images/D_NQ_NP_2X_729676-MLU77324156771_062024-F.webp";
import Iphone2 from "../assets/images/D_NQ_NP_2X_759471-MLA71782897602_092023-F.webp";
import './styles.css' 

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container min-h-[520px] lg:h-screen mx-auto px-4 py-8 lg:py-16">
      <Slider {...settings}>
        <div className="p-4">
          <img className="h-48 md:h-60 lg:h-80" src={Iphone1} />
        </div>
        <div className="p-4">
          <img className="h-48 md:h-60 lg:h-80" src={Iphone2} />
        </div>
        <div className="p-4">
          <img className="h-48 md:h-60 lg:h-80" src={Iphone1} />
        </div>
        <div className="p-4">
          <img className="h-48 md:h-60 lg:h-80" src={Iphone1} />
        </div>
        <div className="p-4">
          <img className="h-48 md:h-60 lg:h-80" src={Iphone2} />
        </div>
        <div className="p-4">
          <img className="h-48 md:h-60 lg:h-80" src={Iphone1} />
        </div>
        <div className="p-4">
          <img className="h-48 md:h-60 lg:h-80" src={Iphone1} />
        </div>
        <div className="p-4">
          <img className="h-48 md:h-60 lg:h-80" src={Iphone2} />
        </div>
        <div className="p-4">
          <img className="h-48 md:h-60 lg:h-80" src={Iphone1} />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
