// CustomerReviews.js
import React from "react";
import Helmet from "./helmet";
import CommonSection from "./commonSection";
import { Container,Col,Row } from "reactstrap";
const feedbacks=[
  {
    feed: "Great service! Loved the car.",
  },
  {
    feed: "Smooth rental process.",
  },
  {
    feed: "Great service! Loved the car.",
  },
  {
    feed: "Great service! Loved the car.",
  },
  {
    feed: "Great service! Loved the car.",
  },
  {
    feed: "Great service! Loved the car.",
  },
  {
    feed: "Great service! Loved the car.",
  },
  {
    feed: "Great service! Loved the car.",
  },
]
const CustomerReviews = () => {
  return (
    <Helmet title="Feedbacks">
    <CommonSection title="Customer testimonials" />
    
    <section>
    <Container>
        <h3 className="section__title text-center">Agencies  <h3 style={{ color: '#D42F2E' }}>Safar El Amir in Algeria</h3></h3>
        <Row>
        {feedbacks.map((item, index) => (
            <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
            <div className="single__member">

               
                <p className="section__description text-center">
                <i class="ri-star-line" style={{ color: '#ffec3d' }}></i>
                {item.feed}
                </p>
                
            </div>
            </Col>
        ))}
        </Row>
    </Container>
    </section>

  </Helmet>

    
   
  );
};

export default CustomerReviews;
