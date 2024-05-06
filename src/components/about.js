import React from "react";
import { Container } from "reactstrap";
import "./styles/about.css";
import aboutImg from "../assets/img/about.png";

const About = () => {
  return (
    <section
      className="about__section"
    >
      <Container className="about__section">
        <div >
            
           
                <div className="about__section-content">
                    <h4 className="section__subtitle">our service</h4>
                    <h2 className="section__title">Welcome to car rent service</h2>
                    <p className="section__description" style={{width: '80%'}}>
                        For all your trips in Algeria, we offer a car rental service with driver. 
                        Our agent waits for you at the airport and takes care of you regardless of 
                        the number of people. You can count on us for your airport hotel shuttle to 
                        the various Algerian cities at affordable prices.</p>
                    <p className="section__description" style={{width: '80%'}}>
                        We put at your disposal the simple or luxurious sedans, luxury 4x4s, 
                        minibuses and even coaches. Visit our dedicated website by clicking on 
                        AlgerieTransfert.com
                    
                    </p>

                    <div className="about__section-item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i> At your service since 2003
                        </p>

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i> Free unlimited mileage
                        </p>
                    </div>

                    <div className="about__section-item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i> Guarantee of the chosen model
                        </p>

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i> 24-hour support
                        </p>
                    </div>
                    <div>
                        <a href="/agencies"><i class="ri-arrow-right-s-line"></i> more</a>
                       
                    </div>
                    
                </div>
            
            
            </div>
            <div>
               <div className="about__img">
                    <img src={aboutImg} alt="" className="w-100" />
                </div>
               
            
          </div>
         
      </Container>
    </section>
  );
};

export default About;