import React from "react";
import { Route,Routes, Navigate, Router} from "react-router-dom";
import Home from "./home";
import Models from "./models";
import CarDetails from "./carDetails"
import Agencies from "./agencies";
import BookingForm from "./bookingForm";
import Feedbacks from "./feedbacks";
import PremiumProgram from "./premiumProgram";
import OffreDispo from "./offreDispo";
import EditForme from "./EditForme";
import Confirmation from "./confirmation";
import Login from "./login";
import Dashbord from "./dashbord";
const Routers = () => {
  return (
    <Routes>
      
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/cars/:slug" element={<CarDetails/>}/>
        <Route path="/agencies" element={<Agencies/>}/>
        <Route path="/bookingform" element={<BookingForm/>}/>
        <Route path="/feedbacks" element={<Feedbacks/>}/>
        <Route path="/PremiumProgram" element={<PremiumProgram/>}/>
        <Route path="/offreDispo" element={<OffreDispo/>}/>
        <Route path="/EditForme" element={<EditForme/>}/>
        <Route path="/Confirmation" element={<Confirmation/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/dashbord' element={<Dashbord/>}/>
    </Routes>
  );
};

export default Routers;