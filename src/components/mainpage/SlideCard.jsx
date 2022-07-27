import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        <img src="./images/banner/banner-1.jpg" alt="" />
        <img src="./images/banner/banner-2.jpg" alt="" />
        <img src="./images/banner/banner-3.jpg" alt="" />
        <img src="./images/banner/banner-4.jpg" alt="" />
        <img src="./images/banner/banner-5.jpg" alt="" />
      </Slider>
    </>
  );
};

export default SlideCard;
