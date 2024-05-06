import React from "react";
import driveImg from "../assets/img/drive.jpg"
import { Container, Row, Col } from "reactstrap";
import Helmet from "./helmet";
import CommonSection from "./commonSection";
import "./styles/agencies.css";





const OUR__Agencies = [
  {
    name: "Oran city agency",
    adresse: " 51 Emîr Khaled Avenue (facing the post office)",
    time: "From Saturday to Thursday: 08H30 to 17H00",

  },

  {
    name: "Agence Algiers ville",
    adresse: " Centre Commercial City Center, the banishers",
    time: "From Saturday to Thursday: 08H30 to 17H00",
    
  },

  {
    name: "Oran ",
    adresse: " Ahmed Ben Bella Airport",
    time: " 7D/ 7 24H/24",
    
  },

  {
    name: "Tlemcen",
    adresse: " Messali El Hadj Airport",
    time: "7D / 7 24H/24",
    
  },
  {
    name: " Alger",
    adresse: " Houari Boumedienne Airport",
    time: "7D / 7 24H/24",
    
  },
  {
    name: " Constantine",
    adresse: " Mohamed Boudiaf Airport",
    time: "7D / 7 24H/24",
    
  },
  {
    name: " Batna",
    adresse: " Mostafa Benboulaid Airport",
    time: "7D / 7 24H/24",
    
  },
  {
    name: "Béjaia",
    adresse: " Abane Ramdane Airport",
    time: "7D / 7 24H/24",
    
  },
  {
    name: " Sétif",
    adresse: " Airport 08 May 1945",
    time: "7D / 7 24H/24",
    
  },
  {
    name: " Annaba",
    adresse: "Rabah Bitat Airport",
    time: "7D / 7 24H/24",
    
  },
  {
    name: " Jijel",
    adresse: " Ferhat Abbas Airport",
    time: "7D / 7 24H/24",
    
  },
];

const Agencies = () => {
  return (
    <Helmet title="Agencies">
      <CommonSection title="Our Agencies" />
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                About Safar El Amir
                </h2>

                <p className="section__description">
                Safar El Amir is a family company founded in 2003 that quickly became the
                 favorite and unmissable car rental company in Algeria.Why? Because we 
                 work very hard every day to improve the quality of theThe experience of
                  our clients, who have given us their precious trust, implies a constant
                   challenge at the level of all our departments in order to reinvent our 
                   noble profession every day.


                </p>

                <p className="section__description">
                Safar El Amir is a premium brand that has been chosen by more than 15,000 
                customers over the last 20 years.existence and through our 11 agencies 
                in Algeria.Safar El Amir has been repeatedly cited and rewarded by the 
                greatest European tourist guides such as Le petit fûté and Le routard.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Are you ready to take the first step?</h6>
                    <h4>+ 213 41 21 70 70</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     
      <section>
            <Container>
                <p><h3 className="section__title text-center">Agencies <h3 style={{ color: '#D42F2E' }}>Safar El Amir in Algeria</h3></h3></p>
                <Row>
                {OUR__Agencies.map((item, index) => (
                    <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
                    <div className="single__member">

                        <h6 className="title text-center mb-0 mt-3 custom-h6" >{item.name}</h6>
                        <p className="section__description text-center">
                        <i class="ri-map-pin-2-line" style={{ color: '#4d26f9' }}></i>
                        {item.adresse}
                        </p>
                        <p className="section__description text-center" >
                        <i class="ri-time-line" style={{ color: '#4d26f9' }}></i>{item.time}
                        </p>
                    </div>
                    </Col>
                ))}
                </Row>
            </Container>
            </section>

    </Helmet>
  );
};

export default Agencies;