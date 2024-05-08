// import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About  from './components/About';    
import React from "react";
import Navbar from "./components/Navbar";
import './index.css'


    function App(){
      return(
        <React.Fragment>
          <Navbar/>
        </React.Fragment>
      )
    }


export default App
