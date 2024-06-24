import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OrderForm from './pages/OrderForm';
import './App.css';
//import SocialMediaFeed from './components/SocialMediaFeed';

function App() {
  return (
  
      <div className="App">
        <Navbar />
      <Routes>
       
        {/* <Switch> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/orderform" element={<OrderForm/>}/>
        <Route path="/home/:symbol" element={<Home/>} /> 
        <Route path="/contact" element={<Contact/>}/>
        {/* </Switch> */}
        </Routes>
      </div>
   
  );
}

export default App;

