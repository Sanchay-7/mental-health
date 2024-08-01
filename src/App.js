import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import UserHome from './home.js';
import Therpist from './therpist.js';
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/Therapist" element={<Therpist />} />
        </Routes>
    </>
  );
}

export default App;
