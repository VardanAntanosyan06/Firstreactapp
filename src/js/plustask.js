import ReactDOM from "react-dom";
import React, { Component, useEffect, useReducer, useState } from "react";
import axios from "axios";

const Plus = (props) => {
  const [task, setTask] = useState(null);
  useEffect(() => {
    if (props.open) {
      axios
        .get(`http://localhost:5000/get/task?id=${props.id}`)
        .then((result) => {
          setTimeout(() =>setTask(result.data), 200);
        });
    }
  }, [props]);
  return props.open ? (
    <div
      style={{
        width: "90%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "25px",
        color: " rgb(255,100,100)",
        border: "1px solid rgb(0,235,31)",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "40px",
        opacity: "0.5",
        marginTop: "25px",
      }}
    >
      <del color="red">{task ? task.task : "..."}</del>
    </div>
  ) : null;
};

export default Plus;
