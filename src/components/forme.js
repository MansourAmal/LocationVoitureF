//formulaire de recherche 
import React, { useState } from "react";
import './styles/forme.css'
import { DatePicker, Select, Form} from 'antd';
import { useNavigate } from 'react-router-dom';
import {  Col, Container} from "reactstrap";
import moment from 'moment';

const { Option } = Select;
const layout = {
  labelCol: { span: 18 },
  wrapperCol: { span: 25 },
};

const Forme = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');
  const [loyaltyCode, setLoyaltyCode] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const disabledEndDate = (current) => {
    // Désactive les dates antérieures à la date de début
    return startDate && current && current < moment(startDate).endOf('day');
  };


  const Navigate = useNavigate();
  const [isCodeEntryVisible, setIsCodeEntryVisible] = useState(false);

  const handlePickupLocationChange = (value) => {
    setPickupLocation(value);
  };

  const handleReturnLocationChange = (value) => {
    setReturnLocation(value);
  };

  const handleLoyaltyCodeChange = (event) => {
    setLoyaltyCode(event.target.value);
  };

  const handleApplyPremiumClick = (event) => {
    event.preventDefault();
    setIsCodeEntryVisible(!isCodeEntryVisible);
  };

  const handleSubmit = async(values) => {
    
      // Redirection vers la page de réservation avec les résultats
      Navigate(`/offreDispo?pickupLocation=${pickupLocation}&returnLocation=${returnLocation}&startDate=${startDate}&endDate=${endDate}&loyaltyCode=${loyaltyCode}`);
  }  
  /*const handleSubmit = async (values) => {
    try {
      const { pickupLocation, returnLocation } = values;
      
      // Envoi de la requête au backend
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pickupLocation, returnLocation, startDate, endDate, loyaltyCode }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      // Mise à jour de l'interface utilisateur avec les résultats de la recherche
      // Vous devez implémenter cette partie en fonction de votre logique d'affichage
      console.log(data);

      // Redirection vers la page de réservation avec les résultats
      Navigate(`/offreDispo?pickupLocation=${pickupLocation}&returnLocation=${returnLocation}&startDate=${startDate}&endDate=${endDate}&loyaltyCode=${loyaltyCode}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
*/
  return (
    <Container>
        <Col>
          <Form className="form" onFinish={handleSubmit} layout="vertical" {...layout}>
            <div style={{display:'flex',gap:20}}>
            <div className="form_item">

              <Form.Item className="select__group" label="Pick-up Location" name="pickupLocation">
                <Select
                  placeholder="Please enter your pickup location"
                  onChange={handlePickupLocationChange}
                  value={pickupLocation}
                >
                  
                    <Option value="" disabled selected>Find a restitution agency</Option>
                    <Option value="oran- Aéroport Ahmed Ben Bella">Oran - Aéroport Ahmed Ben Bella</Option>
                    <Option value="Tlemcen- Aéroport Messali El Hadj">Tlemcen - Aéroport Messali El Hadj</Option>
                    <Option value="Alger - Aéroport Houari Boumedienne">Alger - Aéroport Houari Boumedienne</Option>
                    <Option value="Constantine - Aéroport Mohamed Boudiaf ">Constantine - Aéroport Mohamed Boudiaf</Option>
                    <Option value="Batna- Aéroport Mostafa Benboulaid">Batna - Aéroport Mostafa Benboulaid</Option>
                    <Option value="Sétif - Aéroport 08 Mai 1945">Sétif - Aéroport 08 Mai 1945</Option>
                    <Option value="Annaba - Aéroport Rabah Bitat">Annaba - Aéroport Rabah Bitat</Option>
                    <Option value="Jijel- Aéroport Ferhat Abbas">Jijel - Aéroport Ferhat Abbas</Option>
                    <Option value="Béjaia- Aéroport Abane Ramdane">Béjaia - Aéroport Abane Ramdane</Option>
                
                </Select>
              </Form.Item>
              <Form.Item className="select__group" label="Return Location" name="returnLocation">
                <Select
                  placeholder="Find a restitution agency"
                  onChange={handleReturnLocationChange}
                  value={returnLocation}
                >
                  <Option value="" disabled selected>Please enter your pickup location</Option>
                  <Option value="oran- Aéroport Ahmed Ben Bella">Oran - Aéroport Ahmed Ben Bella</Option>
                  <Option value="Tlemcen- Aéroport Messali El Hadj">Tlemcen - Aéroport Messali El Hadj</Option>
                  <Option value="Alger - Aéroport Houari Boumedienne">Alger - Aéroport Houari Boumedienne</Option>
                  <Option value="Constantine - Aéroport Mohamed Boudiaf ">Constantine - Aéroport Mohamed Boudiaf</Option>
                  <Option value="Batna- Aéroport Mostafa Benboulaid">Batna - Aéroport Mostafa Benboulaid</Option>
                  <Option value="Sétif - Aéroport 08 Mai 1945">Sétif - Aéroport 08 Mai 1945</Option>
                  <Option value="Annaba - Aéroport Rabah Bitat">Annaba - Aéroport Rabah Bitat</Option>
                  <Option value="Jijel- Aéroport Ferhat Abbas">Jijel - Aéroport Ferhat Abbas</Option>
                  <Option value="Béjaia- Aéroport Abane Ramdane">Béjaia - Aéroport Abane Ramdane</Option>
                </Select>
              </Form.Item>
              </div>
              <div style={{marginTop:10}}>
              <Form.Item name="startDate" label="Start Date">
              <DatePicker
                  showTime={{
                    format: 'HH:mm',
                    minuteStep: 30, 
                  }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={(value, dateString) => setStartDate(dateString)}
                  style={{ border: '1px solid #000d6b' }}
                  pickerInputStyle={{ color: '#000d6b' }}
                />
              </Form.Item>
              <Form.Item name="endDate" label="End Date">
                <DatePicker
                  showTime={{
                    format: 'HH:mm',
                  }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={(value, dateString) => setEndDate(dateString)}
                  style={{ border: '1px solid #000d6b' }}
                  pickerInputStyle={{ color: '#000d6b' }}
                  disabledDate={disabledEndDate}
                />
              </Form.Item>
              </div>
              </div>
              <div>
                <div>
              <Form.Item name="premium">
                <a href="/" onClick={handleApplyPremiumClick} style={{textDecoration:'none',color:'#D42F2E'}}>
                  <i className="ri-arrow-right-s-line"></i> Apply premium rate
                </a>

                {isCodeEntryVisible && (
                  <div style={{width:'30%'}}>
                    <input type="text" id="codeInput" placeholder="Enter your loyalty card!" className="codeInput" onChange={handleLoyaltyCodeChange} value={loyaltyCode} />
                  </div>
                )}
              </Form.Item>
              </div>
              <div >
              <Form.Item>
                <button  htmlType="submit" className="find__car" >
                  Find Car
                </button>
              </Form.Item>
              </div>
              </div>
          </Form>
        </Col>
      </Container>
  );
};

export default Forme;
