import React from "react";
import silver from '../assets/img/silver.png'; 
import gold from '../assets/img/gold.png';
import Helmet from "./helmet";
import CommonSection from "./commonSection";
import { Form, Input, Select, Button } from 'antd';
import './styles/PremiumProgram.css'

const { Option } = Select;

const PremiumProgram = () => {
   

    return (
      <Helmet title="premium">
        <CommonSection title="Premium Program" />
        <section>
            <div  >
                <div className="premium ">
                    <div>
                        <h2 className='text-3xl font-bold section__title ' >Save on the whole year with <span style={{color:'#D42F2E'}}>Safar El Amir</span></h2>
                        <p className=' justify-content-center'>
                            <p>You are already a customer with us!</p>
                            <p>We offer you a loyalty card (Silver or Gold) </p><p>that will save you money 
                            on your rental invoices by simply entering your code when you book online.</p>
                        </p>
                    </div>

                    <p><h3 className="section__subtitle">How do I get my loyalty card?</h3></p>
                    <div className="cart">
                        
                        <img src={silver} alt="Silver Card"></img>
                        <p ><span style={{color:'#D42F2E'}}>Silver card:</span><p> Have consumed a minimum of 14 rental days.</p></p>
                        <img src={gold} alt="Gold Card"></img>
                        <p ><span style={{color:'#D42F2E'}}>Gold Card:</span><p> Have consumed a minimum of 30 rental days.</p></p>
                
                    </div>
                    </div>
                <div className="forme">
                    <h3 className="section__subtitle " style={{fontSize:'40px',textAlign: 'center'}}>Application For A Loyalty Card</h3>
                    <Form
                        name="loyaltyCardForm"
                        
                    >
                        <Form.Item
                            label="Civility"
                            name="civility"
                            rules={[{ required: true, message: 'Please select your civility!' }]}
                        >
                            <Select placeholder="Select your civility">
                                <Option value="Mr">Mr</Option>
                                <Option value="Mrs">Mrs</Option>
                                <Option value="Miss">Miss</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                           
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true, message: 'Please input your last name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email address!' },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Send
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
      </Helmet>
    );
};

export default PremiumProgram;

      
  
    
  