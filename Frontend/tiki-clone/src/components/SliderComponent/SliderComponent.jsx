import React from 'react'
import Slider from 'react-slick'
import {
    WrapperSliderImage
  } from "./style";

const SliderComponent = ({arrImages}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
      };

  return (
    <Slider {...settings}>
        {arrImages.map((image) => {
            return (
                <WrapperSliderImage src={image} alt="slider" preview={true} width="100%" height="274px" />
            )
        })}
    </Slider>
  )
}

export default SliderComponent