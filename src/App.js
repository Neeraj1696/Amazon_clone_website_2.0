import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Checkout from "./components/Checkout";

import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <>
        <Header />
        <Routes>
          <Route path="/home" index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
