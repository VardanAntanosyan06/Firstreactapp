import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import '../src/index.css'


//components
import Form from './js/Form'
import Fetch from "./js/Fetch";
import Login from "./js/Login";

const App = ()=>{
  // return <div id="main">
  //   {/* <Route exact path="/" component={Form} />*/}
  //   <Route index element={<Form />}/>
  //  {/* <Fetch /> */}
  // </div>
  return(
    <BrowserRouter> 
      <Routes>
        <Route index element={< Login/>}/>
        <Route path="/admin" element={<Fetch />}/>
      </Routes>
    </BrowserRouter>
  )
}

 ReactDOM.render(<App />, document.getElementById("root"));
