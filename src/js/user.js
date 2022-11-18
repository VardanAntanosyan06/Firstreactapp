import ReactDOM from "react-dom";
import React, { Component, useEffect, useReducer, useState } from "react";
import "../css/user.css";
import axios from "axios";

const UserAcc = (props) => {
   const [data,setData]= useReducer({})
  axios.get(`http://localhost:5000/get/user?id=${props.id}`).then(
   (result) => {
      setData(result.data.user)
  });
   //   return (
   //    // <h1>c</h1>
   //   )
};

export default UserAcc;
