// import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About  from './components/About';    
import React from "react";
import Navbar from "./components/Navbar";



    function App(){
      return(
        <React.Fragment>
          <Navbar/>
          <BrowserRouter>
          <Routes>
          <Route path="/">Home</Route>
          <Route path="About">About</Route>
          </Routes>
          </BrowserRouter>
        </React.Fragment>
      )
    }


export default App
