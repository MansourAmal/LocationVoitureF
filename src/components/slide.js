import React from "react";
import carte from "../assets/img/carte.png"
import { Container } from "reactstrap";


import "./styles/slide.css";


const Slide = () => {
  
  return (
   
      <div className="slider__item slider__item-01 mt0">
        <Container className="location">
          <div>
          <div className="slider__content ">
            
            <h1 className=" mb-4">Safar el Amir agencies in Algeria</h1>
            <h4 className=" mb-3 section__title">11 Agencies at your service in Algeria</h4>
            <h4 className=" mb-3">
            <ul className="section__description">
            <li><i className="ri-arrow-right-wide-line"></i>Car rental in Alger Houari Boumediène</li>
              <li><i className="ri-arrow-right-wide-line"></i>Car rental in Oran Ahmed Ben Bella</li>
              <li><i className="ri-arrow-right-wide-line"></i>Car rental in Constantine Mohamed Boudiaf</li>
              <li><i className="ri-arrow-right-wide-line"></i>Car rental in Tlemcen Messali Hadj</li>
              <li><i className="ri-arrow-right-wide-line"></i>Car rental in Annaba Rabah Bitat</li>
              <li><i className="ri-arrow-right-wide-line"></i>Car rental in Batna Mostepha Ben Boulaid</li>
              <li><i className="ri-arrow-right-wide-line"></i>Car rental in Sétif 8 MAI 1945</li>
              <li><i className="ri-arrow-right-wide-line"></i>Car rental in Bejaia Soummam Abane Ramdane</li>
              <li><i className="ri-arrow-right-wide-line"></i>Car rental in Jijel Ferhat Abbas</li>
            </ul>
            </h4>
          </div>
          <div>
            <button className="btn reserve__btn mt-4">
              <a href="/">Find an agency</a>
            </button>
          </div>
          </div>
          <div>
            <img src={carte} alt="" />
          </div>
        </Container>
      </div>
      

    

     
       
  
   
  );
};

export default Slide;