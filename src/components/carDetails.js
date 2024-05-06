import React from "react";
import './styles/cardetails.css';

const CarDetails = () => {
  return (
    <div>
      <div className="details">
        <p><i className="ri-arrow-drop-right-line"></i> 1.5 dci Sunroof cruise control  air conditioning</p>
        
      </div>
      <div className="details">
        <p><i className="ri-arrow-drop-right-line"></i>Usb port
        <i className="ri-arrow-drop-right-line"></i>4 airbags
        <i className="ri-arrow-drop-right-line"></i>4 electric windows
        <i className="ri-arrow-drop-right-line"></i> ABS</p>
      </div>
      <div className="details"> 
        <i className="ri-arrow-drop-right-line"></i>ESP
        <i className="ri-arrow-drop-right-line"></i>Bluetooth
        <i className="ri-arrow-drop-right-line"></i>Touch screen
        <i className="ri-arrow-drop-right-line"></i> GPS
        <p><i className="ri-arrow-drop-right-line"></i>Electric mirrors</p>
      </div>
      <div className="details">
        <p><i className="ri-arrow-drop-right-line"></i>alloy rims
       <i className="ri-arrow-drop-right-line"></i> Led lights.</p>
      </div>
    </div>
  );
};

export default CarDetails;
