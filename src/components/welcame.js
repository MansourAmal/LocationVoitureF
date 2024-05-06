import React from 'react';
import "./styles/welcame.css";
import '../../node_modules/video-react/dist/video-react.css'; // import cs
import Slider from "react-slick";
import { Container} from "reactstrap";

const Welcame = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 2500,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} >
  <div className="slideritem item-01 mt0">
    <Container>
     
    </Container>
  </div>

  <div className="slideritem item-02 mt0">
    <Container>
      
    </Container>
  </div>

  <div className="slideritem item-03 mt0">
    <Container>
      
    </Container>
  </div>
</Slider>

   
  );
};


export default Welcame;


