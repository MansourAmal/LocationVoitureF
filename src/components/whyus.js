import React from "react";
import "./styles/whyus.css";
import { Container, Row, Col } from "reactstrap";



const Whyus = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
            <Col>
                <h2 className="section__title become__driver-title">
                why choose us? 
                </h2>
            </Col>
        </Row>
        <Row>
            
        <Col lg="6" md="6" sm="12" className="become__driver-img">
            <div className="box">
                <h4>Best Price</h4>
                <p>Obtenez les meilleurs tarifs sur nos services de conduite. Économisez plus avec nous !</p>
            </div>

            <div className="box">
                <h4>Fast and Safe</h4>
                <p>Nos services garantissent une arrivée rapide et en toute sécurité à votre destination.</p>
            </div>

            <div className="box">
                <h4>Experienced Drivers</h4>
                <p>Nos chauffeurs expérimentés vous assurent un voyage agréable et en toute confiance.</p>
            </div>
        </Col>
        <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become__driver-btn mt-4">
                <a href="/Models">Find car</a>
            </button>
          </Col>


          
        </Row>
      </Container>
    </section>
  );
};

export default Whyus;