import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OrderForm from './pages/OrderForm';
import './App.css';
//import 'react-social-icons/instagram';
//import SocialMediaFeed from './components/SocialMediaFeed';

function App() {
  return (
  
      <div className="App">
        <Navbar />
      <Routes>
       
        {/* <Switch> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<OrderForm/>}/>
        <Route path="/home/:symbol" element={<Home/>} /> 
        <Route path="/contact" element={<Contact/>}/>
        {/* </Switch> */}
        </Routes>
    {/* <SocialIcon network="instagram" url="www.instagram.com/a.j.customs/" /> */}
      </div>
  
  );
}

export default App;

