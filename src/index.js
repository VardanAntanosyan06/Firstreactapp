import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Form from './js/form'
import Fetch from "./js/fetch";

import '../src/index.css'
import Animation from './js/animation'

const App = ()=>{
  return <div id="main">
   <Fetch />
  </div>
}

 ReactDOM.render(<App />, document.getElementById("root"));
