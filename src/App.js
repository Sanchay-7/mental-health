import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import UserHome from './home.js';
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<UserHome />} />
        </Routes>
    </>
  );
}

export default App;
