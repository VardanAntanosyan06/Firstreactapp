import ReactDOM from "react-dom";
import React, { Component, useEffect, useReducer, useState } from "react";
import axios from "axios";

const Plus = (props) => {
  const [task,setTask] = useState(null);
  useEffect(()=>{
    if (props.open) {
      axios.get(`http://localhost:5000/get/task?id=${props.id}`)
      .then ((result)=>{
      setTask(result.data)
      });
} },[])

console.log(props.id,task);
if (props.open) {
    return (
      <div
        style={{
          width: "90%",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "100px",
          color: "rgb(0,235,31)",
          border: "1px solid rgb(0,235,31)",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "40px",
          opacity: "0.5",
          marginTop: "25px",
        }}
      >
        +
      </div>
    );
  } else {
    return null;
  }
};

export default Plus;
