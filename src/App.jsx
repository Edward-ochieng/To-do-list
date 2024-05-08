// import { useState } from 'react'
import ReactDOM from "react-dom/client";
import './App.css'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About  from './components/About';    


    const App = () => {
      let activeClassName = "nav-active";
      return (
        <BrowserRouter>
          <header>
            <h1>To-do-list</h1>
          </header>
          <nav>
            <NavLink
              to=""
              className={({ isActive }) => isActive && activeClassName}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) => isActive && activeClassName}
            >
              About
            </NavLink>
            
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            
          </Routes>
        </BrowserRouter>
      );
    };


export default App
