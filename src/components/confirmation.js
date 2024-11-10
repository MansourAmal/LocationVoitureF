import React from "react";
import { Container,Row,Col } from "reactstrap";
import { Space, Alert,Card } from "antd";
import { useLocation } from 'react-router-dom';
 
const Confirmation = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const pickupLocation = queryParams.get('pickupLocation') ;
  const returnLocation = queryParams.get('returnLocation') ;
  const startDate = queryParams.get('startDate') ;
  const endDate = queryParams.get('endDate') ;
  const price = queryParams.get('price') ;
  const imgUrl = queryParams.get('img') ;
  const carName = queryParams.get('carName') ;
  const nbrj = queryParams.get('nbrj') ;
  const firstName = queryParams.get('First Name') ;
  const lastName = queryParams.get('Last Name') ;
  const age = queryParams.get('Age') ;
  const email = queryParams.get('Email') ;
  const phone = queryParams.get('phone') ;
  const creditCardType = queryParams.get('Credit Card') ;
  const creditCardNumber = queryParams.get('Credit card number') ;
  const monthOfExpiry = queryParams.get('mounth of expiry') ;
  const yearOfExpiry = queryParams.get('year of expiry') ;
  const PrixTotal=queryParams.get('PrixTotal');
  return (
    <Container>
      <section>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert
            message="Success"
            description={`Votre réservation est effectuée avec succées Merci de choisir Safar El Amir.
            `}           
            type="success"
            showIcon
          />
        </Space>
      </section>
      <section>
      <Card className="resume-card" >
        <Row>
            <Col>
            <img src={imgUrl} style={{width:250,height:150}} alt=""/>
            <p style={{fontSize:30,fontWeight:700}}>{carName}</p>
            </Col>
        </Row>
        <Row lg='5'>
            <Col>
              <p className="section__subtitle">Departure:</p>
              <p>{pickupLocation}
              at  {startDate}</p>
              </Col>  
              <Col>
              <p className="section__subtitle">Return</p>
              <p>
                {returnLocation} at {endDate}
              </p>
              </Col>
              <Col>
              <p className="section__subtitle">Durée</p>
              <p>
                {nbrj} jours
              </p>
              </Col> 
        </Row>
        <Row>
          <p style={{fontSize:25}}> Total Lease: {PrixTotal} €</p>
            
        </Row> 
          
          
        
      </Card>  
      </section>
    </Container>
  );
};

export default Confirmation;
