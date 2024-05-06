import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import './styles/header.css';
import logo from "../assets/logo.jpg";



const Header = () => {
  const menuRef = useRef(null); // Define menuRef
 
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <header className="header">
       {/* ============ header bottom ============ */}
       <div className="header__bottom">
        <Container>
          <Row>
           
            <Col lg="12" md="12" sm="12">
              <div className="header__bottom__right d-flex align-items-center justify-content-end gap-3">
                <a href="/login" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </a>

                <a href="/" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </a>

                <a href="/" className="d-flex align-items-center gap-1">
                <i class="ri-settings-5-fill"></i> 
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
       {/* ========== main navigation =========== */}
       <div className="main__navbar">
          <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
              </span>
              <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <a href="/" className="d-flex align-items-center gap-2">
                    <span>
                      <img src={logo} alt="Logo Site" />
                    </span>
                  </a>
                </h1>
              </div>
            </Col>


              <div className="navigation" ref={menuRef}>
                <div className="menu">
                  <a href="/" className="nav__item">HOME</a>
                  <a href="/Models" className="nav__item">MODELS</a>
                  <a href="/Agencies" className="nav__item">AGENCIES</a>
                  <a href="/Feedbacks" className="nav__item">FEEDBACKS</a>
                  <a href="/PremiumProgram" className="nav__item">PREMIUM PROGRAM</a>
                </div>
              </div>
              
             
            </div>
          </Container>
      </div>
      

    </header>
  );
};

export default Header;