
import Slide from './slide';
import Forme from './forme';
import Welcame from './welcame'
import { Container, Row, Col } from "reactstrap";
import Testimonial from './testimonial';
import About from './about';
import Whyus from './whyus';
import Discover from './discover';


function Home() {
  const handleSearchSubmit = (formData) => {
    // Mettez à jour l'état des informations de recherche avec les données du formulaire
    console.log("Form data in parent:", formData);

    // Autres traitements ou redirections ici, si nécessaire
  };
    return (
      <div className="home">
        
        {/*welcome page */}
        <section className="p-0 hero__slider-section">
          <Welcame />
          <div className="hero__form">
            <Container>
              <Row className="form__row">
                <Col className='find__cars-left ' >
                <h2 >Find your best car here</h2>
                  
                </Col>
                <Col lg="8" md="8" sm="12">
                  <Forme onSubmit={handleSearchSubmit}/>
                </Col>
              </Row>
          </Container>
          </div>
        </section>
        
        {/*section about */}
        <section >
          <Container fluid >
            <Row >
              <Col>
                <About/>
              </Col>
            </Row>
          </Container>
        </section>
         {/*section discover */}
         <section style={{backgroundColor:'#F5F9FF'}}>
        <Container >
            <Row  >
              <Col >
                <Discover/>
              </Col>
            </Row>
          </Container>
          
        </section>
        {/*section whyus */}
        <Row>
          <Whyus/>
        </Row>
       
        <section style={{backgroundColor:'#F5F9FF'}}>
          <Container >
            <Row className="justify-content-center" >
              <Col >
                <Testimonial/>
              </Col>
            </Row>
          </Container>
        </section>
        
        {/* section location*/}
        <section className="p-0 hero__slider-section">
            <Slide />
        </section>
       
       
         
      
        
      </div>
    );
  }
  
  export default Home;
  