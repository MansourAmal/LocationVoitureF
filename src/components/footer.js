import React from "react";
import "./styles/footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const  quickLinks= [
    { path: "/Contact", display: "Contact us" },
    { path: "/testimonials", display: "Customer testimonials" },
    { path: "/Privacy", display: "Charter & Privacy" },
    { path: "/Legalnotice", display: "Legal notice" },
    { path: "/Rentalconditions", display: " Rental conditions" },
    { path: "/Cancellationconditions", display: " Cancellation conditions" },
  ];

const Footer = () => {
 
  return (
    <footer className="footer">
       <Container>
        <Row>
        <Col lg="4" md="3" sm="4">
              <div className="adresse">
              
                <h2 className="footer__link-title mb-4"><i class="ri-map-pin-5-line"></i>
                Adresse</h2>
                <h6>
                    <span>
                      <p>We are present at several airports in Algeria: 
                        Algiers, Oran, Tlemcen, Chlef, Constantine, Sétif, 
                        Annaba, Jijel, Skikda, Biskra, Bejaia and Batna.
                        </p>
                    </span>   
                </h6>
              </div>
            </Col>
            <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Customer Service</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <a href={item.path}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">follow us</h5>
              <a href="/" className="office__info"><i class="ri-instagram-line"></i></a>
              <a href="/" className="office__info"><i class="ri-whatsapp-fill"></i></a>
              <a href="/" className="office__info"><i class="ri-facebook-circle-line"></i></a>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;