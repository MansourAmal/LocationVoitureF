import React, { useState } from 'react';
import { Container, Row, Col,Label,FormGroup,Input } from 'reactstrap';
import Slider from 'react-slick';
import carData from './carData';
import './styles/discover.css'



const Discover = () => {
  
  const [filters, setFilters] = useState({
    fuelType: null,
    transmissionType: null,
  });

  const filterCars = (car) => {
    return (
      (!filters.fuelType || car.fuelType.toLowerCase() === filters.fuelType) &&
      (!filters.transmissionType || car.transmissionType.toLowerCase() === filters.transmissionType)
    );
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  const filteredCars = carData.filter(filterCars);

  const sliderSettings= {
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
}
  return (
    <div className="booking-section">
      <div className="booking-title">
        <h2 className='section__title'style={{color:'#D42F2E'}}>Book from Our Collection</h2>
        <p className='section__subtitle' style={{color:'#D42F2E'}}>Explore our collection of models and find the perfect one for you.</p>
      </div>

       {/* Filtres */}
       <Row className="mb-4">
        <Col>
          <FormGroup>
            <Label for="fuelType" style={{color:'#000d6b'}}>Fuel Type:</Label>
            <Input
              type="select"
              id="fuelType"
              onChange={(e) => handleFilterChange('fuelType', e.target.value)}
            >
              <option value="" style={{color:'#000d6b'}}>All</option>
              <option value="diesel"  style={{color:'#000d6b'}}>diesel</option>
              <option value="Essence" style={{color:'#000d6b'}}>Essence</option>
              {/* Ajoutez d'autres options selon vos marques */}
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="transmissionType" style={{color:'#000d6b'}}>Transmission Type:</Label>
            <Input
              type="select"
              id="transmissionType"
              onChange={(e) => handleFilterChange('transmissionType', e.target.value)}
            >
              <option value="" style={{color:'#000d6b'}}>All</option>
              <option value="manual" style={{color:'#000d6b'}}>Manual</option>
              <option value="automatic" style={{color:'#000d6b'}}>Automatic</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>


      <Container>
        {/* Modèles de voitures filtrés en carrousel */}
        <Row>
          <Col>
          <Slider {...sliderSettings} className="slick-container">
            {/* Items de carrousel */}
            {filteredCars.map((car) => (
                <div key={car.id} className="slick-item py-4 px-3">
                {/* Contenu de chaque élément du carrousel */}
                <img src={car.imgUrl} alt={car.carName} />
                <div className="slick-caption">
                    <h3 className='section__description' style={{color:'#000d6b'}}>{car.carName}</h3>
                    
                </div>
                </div>
            ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    <div className='tousModel'>
    <a href='/Models' >
      <i className="ri-arrow-right-s-line"></i>ALL Models
      </a>
    </div>
     
    </div>
  );
};

export default Discover;
