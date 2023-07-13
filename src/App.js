import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SigninForm from "./auth/SigninForm";
import Menubar from "./components/Menubar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />}></Route>
          <Route path="/Menubar" element={<Menubar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
