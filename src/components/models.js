import React, { useState,useEffect } from 'react';
import { Container, Row, Col,Label,FormGroup,Input } from 'reactstrap';
import CommonSection from "./commonSection";
import CarItem from "../components/carItem";
import Helmet from "./helmet";


const Models = () => {
  const [searchResults, setSearchResults] = useState([]);

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
  
  return (
    

    <Helmet title="Models">
        <CommonSection title="Models" />
          <section>
          <div className='d-flex ' style={{ width:'600px', flexDirection: 'column', justifyContent: 'flex-end', flexWrap: 'nowrap', alignItems: 'stretch' ,marginLeft:'300px'}}>
            
              </div>
              <Container>
                <Row>
                  {searchResults.map((item) => (
                    <CarItem item={item} key={item.id} />
                  ))}
                </Row>
              </Container>
            </section>
        </Helmet>

   
   
  );
};

export default Models;