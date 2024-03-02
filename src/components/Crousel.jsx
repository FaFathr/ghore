import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slid1 from "../assets/slid1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import styles from "./Crousel.module.css"
function Crousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  return (
  <div className={styles.containerslid} >
    <Slider {...settings} className={styles.slider}>
    <div>
     <img src={slid1} alt='slid1.jpg'/>
    </div>
    <div>
    <img src={slide2}  alt='slide2.jpg'/>
    </div>
    <div>
    <img src={slide3} alt='slide3.jpg'/>
    </div>
  </Slider>
  </div>
  )
}

export default Crousel
