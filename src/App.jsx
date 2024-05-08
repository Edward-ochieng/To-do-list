// import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About  from './components/About';    
import React from "react";
import Navbar from "./components/Navbar";



    function App(){
      return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/About" element ={<About />} /> 
        </Routes>
        </BrowserRouter>
        
      )
    };


export default App
