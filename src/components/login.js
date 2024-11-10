import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import './styles/login.css';
import logo from "../assets/img/logo.png";

const LoginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

  const onFinish = async (values) => {
    try {
      const response = await fetch('http://localhost:8000/comptes/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();

      // Stocker le jeton localement (exemple: dans les cookies ou localStorage)
      // ...
      localStorage.setItem('userName', data.userName);

      console.log('Login successful!');
      navigate('/dashbord'); 
      // Redirigez l'utilisateur ou effectuez d'autres actions nécessaires après l'authentification
    } catch (error) {
      setError(error.message);
      console.error('Login failed:', error.message);
    }
    
  };

  return (
    <div className="cont">
      <div id="main">
        <div className="close" onClick={() => (window.location.href = '/home')}>
          +
        </div>
        
        <div className="right_cont">
          <div>
            <img
              src={logo}
              alt="logo"
            />
          </div>
          <Form name="loginForm" onFinish={onFinish} style={{ display: 'contents' }}>
            <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
              <Input type="email" placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input type="password" placeholder="Enter your password" />
            </Form.Item>
            <p>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  <p style={{color:'white'}}>Login</p>
                </Button>
              </Form.Item>
              <a className="dont_acn" href="/signup">
                Don't have an account
              </a>
            </p>
          </Form>
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
