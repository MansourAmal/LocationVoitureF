
import React, { useState } from "react";
import "./styles/bookingform.css";
import { Col, Container, Label, Row } from "reactstrap";
import {Switch,Radio, Checkbox ,Card, Form, Input, Select,DatePicker } from 'antd';
import seat from '../assets/seat.png';
import cur from '../assets/cur.png';
import assur from '../assets/assurance.png';
import CommonSection from './commonSection';
import { useLocation, useNavigate } from 'react-router-dom';


const BookingForm = () => {
  const [formData, setFormData] = useState({});
  

  const Navigate = useNavigate();
  const [form] = Form.useForm();
  const [value, setValue] = useState('Master');
  const options = [
    {
      label: 'Master',
      value: 'Master',
    },
    {
      label: 'Visa',
      value: 'Visa',
    },
  ];
  
  const handleSubmit = async (values) => {
    setFormData(values);
    const queryParams = new URLSearchParams();
    for (const key in values) {
      queryParams.append(key, values[key]);
    }
  
    try {
      // Effectuez une requête pour créer un nouveau client sur votre API
      const response = await fetch('http://localhost:8000/locations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Client créé avec succès:', responseData);
        alert(`Le booking a bien été enregistré.`);
      } else {
        console.error('Erreur lors de la création du client:', response.statusText);
        // Gérer les erreurs ou afficher un message à l'utilisateur si nécessaire
      }
    } catch (error) {
      console.error('Erreur lors de la création du client:', error);
      // Gérez les erreurs inattendues
        console.error('Erreur inattendue :', error);
        alert('Erreur inattendue. Veuillez réessayer.');
      // Gérer les erreurs ou afficher un message à l'utilisateur si nécessaire
    }
  
    // Ajoutez les informations de recherche à la requête
    queryParams.append('pickupLocation', pickupLocation);
    queryParams.append('returnLocation', returnLocation);
    queryParams.append('startDate', startDate);
    queryParams.append('endDate', endDate);
    queryParams.append('price', price);
    queryParams.append('img', imgUrl);
    queryParams.append('carName', Carname);
    queryParams.append('nbrj', nbrj);
    queryParams.append('PrixTotal', calculateTotalPrice());
    

    Navigate(`/Confirmation?${queryParams.toString()}`);
  };
  


  const [disabled] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [formadd,setFormadd]=useState(false);
  const [formbaby,setFormbaby]=useState(false);
  const [addcur,setaddcur]=useState(false);
  const onChange4=(checked)=>{
    setaddcur(checked);

  }

  const onChange3 =(checked)=>{
    setFormbaby(checked);
  };

  const onChange2=(checked)=>{
    setFormadd(checked);
  };

  const onChange = (checked) => {
    setFormVisible(checked);
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const imgUrl=params.get('img');
  const price =params.get('price');
  const Carname=params.get('carName');
  const pickupLocation=params.get('pickupLocation');
  const returnLocation=params.get("returnLocation");
  const startDate=params.get('startDate');
  const endDate=params.get('endDate');
  const nbrj=params.get('nbrj');  

  const onChange1 = ({ target: { value } }) => {
    setValue(value);
  };

  const calculateOptions=()=>{
    let option=0;
    if(addcur){
      option+=15;
    }
    if(formadd){
      option+=2*nbrj;
    }
    return option;
  }

  const calculateTotalPrice = () => {
    let optionsPrice = 0;
    let FraisDossier = 5;
    let driver = 0;
  
    if (addcur) {
      optionsPrice += 15;
    }
  
    if (formadd) {
      driver += 2 * nbrj; 
    }
  
    const totalPrice = parseFloat(price) + optionsPrice + FraisDossier + driver;
    return totalPrice.toFixed(2);
  }
  
  return (
    <Container>
      <CommonSection title="vehicule reservation" />
      <Card className="resume-card" >
        <Row>
        <Col>
          <img src={imgUrl} style={{width:250,height:150}} alt=""/>
        </Col>
        <Col >
          <p style={{fontSize:30,fontWeight:700}}>{Carname}</p>
        </Col>
        <Col lg='5'>  
              <p className="section__subtitle">Support and Return</p>
              <p>From {pickupLocation} <i class="ri-arrow-right-s-line"></i> {returnLocation}</p>
              from  {startDate} <i class="ri-arrow-right-s-line"></i>{endDate}
          
        </Col>
        <Col>
          <p> Total Lease :{price}€</p>
            <p>options: {calculateOptions()}</p>
            <p>Frais de dossier:5€</p>
            <p style={{fontWeight:700}}>Total price: {calculateTotalPrice()}</p>
        </Col> 
        </Row>  
          
        
      </Card>

      <Form name='bookingForm' form={form} layout="vertical" className="booking__form " onFinish={handleSubmit}>

      <Card >
        <Card className="infobouking">
        <h3 className="section__subtitle">Available-options</h3><br/>
        <div className="Available-options">
          <Row>
            <Card className="op">
            <div className="part">
              <p>
                <i class="ri-user-add-line" ></i>
               driver</p>
              <p>2.00 € par jour</p>
              <Switch  onChange={onChange2} style={{width:50}}/>
              </div>
              
              
            </Card >
          </Row>
          <Row style={{marginTop:10}}>
            <Col>
            <Card className="op">
              <div className="part">
                <img src={seat} style={{ width: 30, height: 30 }} alt=""/>
                Baby seat
                <span style={{ color: 'green', fontWeight: 770 }}>
                  <p>Free</p>
                </span>
                <Switch onChange={onChange3} style={{width:50}}/>
                </div>
                {formbaby && (
                  <Form.Item>
                   <Select
                      value={selectedItems}
                      style={{ width: 180 }}
                      onChange={setSelectedItems}
                    >
                      {[
                        {
                          label: 'Baby seat 0-10kg',
                          value: 'Baby seat 0-10kg',
                        },
                        {
                          label: 'Baby seat 9-18kg',
                          value: 'Baby seat 9-18kg',
                        },
                        {
                          label: 'Baby seat 15-25kg',
                          value: 'Baby seat 15-25kg',
                        }
                      ].map((option) => (
                        <Select.Option key={option.value} value={option.value}>
                          {option.label}
                        </Select.Option>
                      ))}
                    </Select>

                  </Form.Item>
                )}
              
            </Card>

            </Col>
            <Col>
          
            <Card className="op">
              <div className="part">
              <img src={cur} style={{width:30, height:30}} alt=""/>
              Plein carburant
              <p>15.00 €</p>
              <p><Switch  onChange={onChange4} style={{width:50}}/></p>
              </div>
            </Card>
            </Col>
            <Col>
            <Card className="op">
              <div className="part">
                <img src={assur}  style={{width:40, height:40}} alt=""/>
                  Assurance Silver (incluse)
                  <span style={{color:'green',fontWeight:770}}><p>Free</p></span>
                  <Switch disabled={disabled} defaultChecked style={{width:50}}/>
                
              </div>
            </Card>
            </Col>
            </Row>
            </div>
          </Card>  
        <Card >
        <h3 className="section__subtitle">Informations relatives au conducteur</h3>
        
            <div className="part">
              <Form.Item name="FirstName" label="First Name" rules={[{required: true,},]}>
                <Input/>
              </Form.Item>
              <Form.Item name="LastName" label="Last Name" rules={[{required: true,},]}>
                <Input/>
              </Form.Item>
              <Form.Item name="Age" label="Age" >
                <Input/>
              </Form.Item>
              <Form.Item name="Email" label="Email" rules={[{required: true,},]}>
                <Input/>
              </Form.Item>
            </div>
            <div className="part">
              <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item name="dateDrivingL" label="Driving license date" hasFeedback validateStatus="Driving license date">
                <DatePicker
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>
            </div> 

            </Card>
            <Card className="infobouking" style={{marginTop:10}}>
        
        <div>
          <h3 className="section__subtitle">Flight information (optional)</h3>
            <p>Do you have a flight on the day of pick-up?</p>
            <Switch  onChange={onChange} />
            {formVisible && (
              <div className="part">
                <Form.Item
                  name="Compagnie aérienne"
                  label="Compagnie aérienne"
                  rules={[{ required: true, message: 'Please select Compagnie aérienne!' }]}
                >
                 <Select
                  value={selectedItems}
                  placeholder="Compagnie aérienne"
                  onChange={setSelectedItems}
                >
                  {[
                    { value: "Atlass ATlantique airlines", label: "Atlass ATlantique airlines" },
                    { value: "Air Algeria", label: "Air Algeria" },
                    { value: "Tassili airlines", label: "Tassili airlines" },
                    { value: "Tunis Air", label: "Tunis Air" },
                    { value: "Royal Air Maroc", label: "Royal Air Maroc" }
                  ].map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
                </Form.Item>
                <Form.Item name="Flight #" label="Flight #" rules={[{required: true,},]}>
                  <Input/>
                </Form.Item>
                <Form.Item name="Provenance " label="Provenance " rules={[{required: true,},]}>
                  <Input/>
                </Form.Item>
               
              </div>
            )}
          </div>
          </Card>
          <Card className="infobouking">
      <div>
        <div >
        <h3 className="section__subtitle">guarantee your booking</h3>
        <div className="part">
          
            
            <Form.Item name="Credit Card " label="Credit Card">
              <Radio.Group options={options} onChange={onChange1} value={value} optionType="button" buttonStyle="solid" className="rad" label="Carte de crédit"/>
            </Form.Item>
            <Form.Item name="Credit card number" label="Credit card number" rules={[{required: true,},]}>
              <Input/>
            </Form.Item>
            <Form.Item
              name="mounth of expiry"
              label="mounth of expiry"
              rules={[{  message: 'Please select mounth of expiry!' }]}
              style={{width:200}}
            >
              <Select
              value={selectedItems}
              onChange={setSelectedItems}
            >
              {[
                { value: '1', label: 'January' },
                { value: '2', label: 'February' },
                { value: '3', label: 'March' },
                { value: '4', label: 'April' },
                { value: '5', label: 'May' },
                { value: '6', label: 'June' },
                { value: '7', label: 'July' },
                { value: '8', label: 'August' },
                { value: '9', label: 'September' },
                { value: '10', label: 'October' },
                { value: '11', label: 'November' },
                { value: '12', label: 'December' }
              ].map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
            </Form.Item>
          
            <Form.Item
              name="year of expiry"
              label="Year of expiry"
              rules={[{ required: true, message: 'Please select year of expiry!' }]}
              style={{width:200}}
            >
               <Select onChange={setSelectedItems}
               value={selectedItems}>
                  {[...Array(10).keys()].map((i) => (
                    <Select.Option key={i} value={2022 + i}>
                      {2022 + i}
                    </Select.Option>
                  ))}
                </Select>
            </Form.Item>
          
          </div>  
          </div>
      </div>
      <div>
        <p><Checkbox required={true}>I declare having read and accepted the<a href="/"> general rental conditions</a></Checkbox></p>
        <p><Checkbox required={true}>I declare having read and accepted the <a href="/">cancellation and modification conditions</a> </Checkbox></p>
      </div>
      <div>
        <button  
          type="submit"  
          className="btn-confirm" 
        >
          Confirm booking  
          
        </button>
       </div>
       
       </Card>
    </Card>
    </Form>
    </Container>
  );
};

export default BookingForm;
