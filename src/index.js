import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import '../src/index.css'
import reportWebVitals from "./reportWebVitals";


//components
import Form from './js/Form'
import AxiosConnect from "./js/admin";
import Login from "./js/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <BrowserRouter> 
      <Routes>
        <Route index element={< Login/>}/>
        <Route path="/admin" element={<AxiosConnect />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

 reportWebVitals();

