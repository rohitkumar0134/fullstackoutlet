import './App.css'
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes,Navigate,useLocation } from "react-router-dom";
import Mainpage from './components/mainpage/Mainpage';
import ShowInfo from './components/Details/ShowInfo';
import Adminshowinfo from './components/Details/Adminshowinfo';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Register from "./admin/Register"
import Addoutlet from './admin/Addoutlet';
import Editoutlet from './admin/Editoutlet';


function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    
    <>
       <Router>
        <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route exact path="/:id" element={<ShowInfo />} />


        <Route path="/admin" element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <Navigate to="/admin/login" />} />
       <Route path="/admin/login" element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <Login />} />
       <Route path="/register" element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <Register />} />
       <Route path="/admin/dashboard" element={!isAuthenticated ? <Navigate to="/admin/login" /> : <Dashboard />} />
       <Route path="/admin/outlet/:id" element={!isAuthenticated ? <Navigate to="/admin/login" /> : <Adminshowinfo />} />
       <Route path="/admin/editoutlet/:id" element={!isAuthenticated ? <Navigate to="/admin/login" /> : <Editoutlet />} />
       <Route path="/admin/addoutlet" element={!isAuthenticated ? <Navigate to="/admin/login" /> : <Addoutlet/>} />


        </Routes>
        </Router>

    </>

  )
}

export default App
