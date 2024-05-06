//offredispo
import React, { useState, useEffect } from "react";
import Helmet from "./helmet";
import CommonSection from "./commonSection";
import { Col} from "antd";
import './styles/offreDispo.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Card, Container, Row } from "reactstrap";
import './EditForme';
import fuel from "../assets/cur.png";
import snow from "../assets/snowflake.png";
import box from "../assets/speedbox.png";
import { DownCircleTwoTone } from '@ant-design/icons';



const OffreDispo = () => {
  const [searchResults, setSearchResults] = useState([]);
  // Ajoutez d'autres états nécessaires
  

  useEffect(() => {
    
    const fetchSearchResults = async () => {
      try {
        const response = await fetch('http://localhost:8000/voitures/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
  
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
  
    fetchSearchResults();
  }, );

  function calculateNumberOfDays(startDate, endDate) {
    // Convertissez les dates en objets de type Date
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Calculez la différence en millisecondes entre les deux dates
    const timeDifference = end.getTime() - start.getTime();
  
    // Convertissez la différence en jours
    const numberOfDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return numberOfDays;
  }  
 

  // Utilisez le hook useLocation pour obtenir l'objet location qui contient les informations de l'URL
  const location = useLocation();
  
   // Utilisez le constructeur URLSearchParams pour extraire les paramètres de l'URL
   const params = new URLSearchParams(location.search);

   // Récupérez les valeurs des paramètres en utilisant la méthode get
  const paramValue1 = params.get('pickupLocation');
  const paramValue2 = params.get('returnLocation');
  const paramValue3 = params.get('startDate');
  const paramValue4 =params.get('endDate');
  const paramValue5 =params.get('loyaltyCode');
  
 // ... Le reste de votre composant, utilisez maintenant "searchResults" pour afficher les voitures disponibles
  return (
    <Helmet title="result">
      <CommonSection title="Our available offers" >
        </CommonSection>
        <Container>
        <Card>
          <section className="recap">
            
              <Col xs={3} sm={5} md={7} lg={9} >
                <div >
                   <div> 
                      <h5 className="section__subtitle">Departure:</h5>
                      {paramValue1}
                    </div>
                    <div style={{display:'flex' ,gap:8}}>
                      <div><i class="ri-calendar-line" ></i></div>
                      <div>{paramValue3}</div> 
                    </div>
                </div>
              </Col>
              <Col>
              <div>
                <div>
                  <h5 className="section__subtitle" >Return:</h5>
                  {paramValue2}
                </div>
                <div style={{display:'flex' ,gap:8}}>
                  <div><i class="ri-calendar-line"></i></div>
                  <div>{paramValue4}</div>
                </div>
              </div>
              </Col>
              <Col>
                <button  type='submit' className="btn mt-2" ><Link to={`/EditForme?pickupLocation=${paramValue1}&returnLocation=${paramValue2}&loyaltyCode=${paramValue5}&startDate=${paramValue3}&endDate=${paramValue4}`} >Modify  your search</Link></button>  
              </Col>
          </section>
        </Card>
        <Card style={{marginTop:20,marginBottom:20}}>
        <section>
          {searchResults.map((item) => (
            <div key={item._id}  >
                <div className="offre">
                      <Col lg={4}>
                        <p style={{display:'flex'}}><h4 >{item.carName}<h5> {item.modele} </h5></h4></p>
                        <img alt={item.marque} src={item.imgUrl} style={{objectFit: 'cover',width:'100%'}} />
                      </Col>
                      
                      <Col className="info" lg={13}>
                      
                        <Row>
                        <div className="info-item"> 
                            <div><img src={fuel} style={{width:20,height:20}} alt=""/>{item.fuelType}</div>
                            <div><i class="ri-gps-line"></i> {item.gps}</div>
                            <div><img src={box} alt=""/>{item.boiteVitesse}</div>
                            <div><img src={snow} alt="" style={{width:20,height:20}}/> Air conditioner</div>
                        </div>
                        </Row>
                        <Row>
                          <h5 className="info-title">This price includes:</h5> 
                          <div className="info-item"> 
                            <div><DownCircleTwoTone /> Unlimited kilometres</div>
                            <div><DownCircleTwoTone /> Silver insurance</div>
                            <div><DownCircleTwoTone /> Free cancellation before</div>
                            <div><DownCircleTwoTone /> VAT and airport surcharge</div>
                            <div><DownCircleTwoTone /> Breakdown assistance</div>   
                          </div>

                        </Row>
                        <Row>
                        <h5 className="info-title">Conditions:</h5>
                        <div className="info-item">
                          <div><i class="ri-arrow-right-s-line" style={{color:'blue'}}></i>Age Minimum:26 ans</div>
                          <div><i class="ri-arrow-right-s-line" style={{color:'blue'}}></i>Permis de conduire: +2 ans</div>
                          <div><i class="ri-arrow-right-s-line" style={{color:'blue'}}></i>Caution: 300 euros en espèce</div>
                          <div><i class="ri-arrow-right-s-line" style={{color:'blue'}}></i>Dépôt pièce d'identité: originale</div>
                        </div>
                        </Row>
                        
                        </Col>
                        
                        <Col>     
                                <div className="price">
                                    <div> {item.prix}£ /Day</div>
                                    <div>{item.prix * (calculateNumberOfDays(paramValue3,paramValue4))}£ Total</div>
                                    <div className="section__description" style={{fontsize: '0.6rem'}}>Total prix pour { (calculateNumberOfDays(paramValue3,paramValue4)) } jours</div>
                                    <button className="btn mt-2">
                                    <Link
                                      to={`/bookingForm?pickupLocation=${paramValue1}&returnLocation=${paramValue2}&startDate=${paramValue3}&endDate=${paramValue4}&loyaltyCode=${paramValue5}&price=${item.prix* (calculateNumberOfDays(paramValue3,paramValue4))}&img=${item.imgUrl}&carName=${item.carName}&nbrj=${calculateNumberOfDays(paramValue3,paramValue4)}&idvoiture=${item._id}`}
                                      
                                    >
                                      rent now</Link>
                                      </button>
                                </div>
                              
                              
                        </Col>       
                      
                      

                      
                  
                </div>
            
                </div>
          ))}
        
      </section>
      </Card>
      </Container>
    </Helmet>
  );
};

export default OffreDispo;
