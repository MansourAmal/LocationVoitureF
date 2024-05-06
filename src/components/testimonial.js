import React from "react";
import Slider from "react-slick";
import "./styles/testimonial.css"
import { Container ,Row} from "reactstrap";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-area">
      <Container>
        <Row>
      <div className="card-title">
    <h1>What our customers say</h1>
  </div>
  
  <Slider {...settings}>
    <div className="testimonial py-4 px-3">
      <p className="section__description">
        Thank you for this rental. Great team. See you soon for a next rental.
      </p>
      <div className="mt-3 d-flex align-items-center gap-4">
        <div>
          <h6 className="mb-0 mt-3 rate "><i className="ri-user-line"></i> Abed Belaouf</h6>
          <p className="section__description rate"><i className="ri-calendar-line"></i> 07 Mar, 2017</p>
          <p className="rate">
            <i className="ri-star-fill" ></i>
            <i className="ri-star-fill" ></i>
            <i className="ri-star-fill" ></i>
            <i className="ri-star-fill" ></i>
            <i className="ri-star-line" ></i>
          </p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p className="section__description">
        Good benefits. Professional. Airport delivery. I recommend Safar El-Amir.
      </p>
      <div className="mt-3 d-flex align-items-center gap-4">
        <div>
          <h6 className="mb-0 mt-3 rate "><i className="ri-user-line"></i> Abdelhafid Aichouba</h6>
          <p className="section__description rate"><i className="ri-calendar-line"></i> 09 Jan, 2017</p>
          <p className="rate">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
          </p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p className="section__description">
        Excellent hospitality. Vehicle reservation... It was really perfect. Bravo!
      </p>
      <div className="mt-3 d-flex align-items-center gap-4">
        <div>
          <h6 className="mb-0 mt-3 rate"><i className="ri-user-line"></i> Mohamed Derouiche</h6>
          <p className="section__description rate"><i className="ri-calendar-line"></i> 24 Apr, 2017</p>
          <p className="rate">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
          </p>
        </div>
      </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p className="section__description">
        First rent in Algeria, and I would like to congratulate you. Very friendly staff, no delay for the appointment of the car to go as back to the airport.
      </p>
      <div className="mt-3 d-flex align-items-center gap-4">
        <div>
          <h6 className="mb-0 mt-3 rate"><i className="ri-user-line"></i> LAHLOU HANOUTI</h6>
          <p className="section__description rate"><i className="ri-calendar-line"></i> 06 Dec, 2017</p>
          <p className="rate">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
          </p>
        </div>
      </div>
    </div>
  </Slider>
      
  </Row>
  <Row>
  <div className="avis">
    <a href="/" >
     <i className="ri-arrow-right-s-line"></i>
      All Reviews
    </a>
  </div>
  </Row>
  </Container>
</div>

  );
};

export default Testimonial;
