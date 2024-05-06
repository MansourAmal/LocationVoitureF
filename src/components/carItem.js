
import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./styles/car-item.css";
import CarDetails from "./carDetails"; 
import "./EditForme";

const CarItem = (props) => {
  const { imgUrl, modele, carName, boiteVitesse, km } = props.item;
  //const { name, modelId, equipment, images, totalAmount, currency, cancellationPolicies, minAge } = props.item;
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {modele}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {boiteVitesse}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {km}
            </span>
          </div>

          <button className="w-50 car__item-btn car__btn-rent">
            <Link to={`/EditForme`}>Rent</Link>
          </button>

          <button
            className="w-50 car__item-btn car__btn-details"
            onClick={toggleDetails}
          >
            Equipement
          </button>

          {showDetails && <CarDetails item={props.item} />}
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
