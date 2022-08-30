import React from 'react'
import Sdata from '../info/data6';
import '../styles/Slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slide2 = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <>
        <div className='slide'>
          <Slider {...settings}>
            {Sdata.map((value) => {
              return (
                <div className='box'>
                  <div className='img'>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </>
    )
  }
  export default Slide2
