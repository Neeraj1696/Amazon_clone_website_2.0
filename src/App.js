import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Checkout from "./components/Checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
