import ReactDOM from "react-dom";
import React, { Component, useEffect, useReducer, useState } from "react";
import axios from "axios";
import Animation from "./Animation";
import "../css/getTasksForAdmin.css";
import { findAllByDisplayValue } from "@testing-library/react";

const GetTasks = (props) => {
  const [task, setTask] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get/user?id=${props.id}`)
      .then((result) => {
        setTask(result.data.Tasks);
        setLoading(false);
      });
  }, []);
    return (
      <div id="glav">
        {loading ? (
          <Animation />
        ) : task.length > 0 ? (
          <div className="taskDiv">
            <div
              style={{
                display: "flex",
                alignItems: "center",
  
                justifyContent: "space-around",
                width: "220px",
              }}
            >
              <h1>Tasks</h1>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2816/2816378.png"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            {task.map((i) => (
                i.status=="sent"?
              <div
                className="tasks">
                <h2>{i.task}</h2>
              </div>
            :null))}
          </div>
        ) : (
          <h1>yet not tasks</h1>
        )}
        <div className="taskDiv">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "220px",
            }}
          >
            <h1>in the process</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4394/4394553.png"
              style={{ width: "60px", height: "60px" }}
            />
            {task.map((i) => (
                i.status=="inProcess"?
              <div
                className="tasks">
                <h2>{i.task}</h2>
              </div>
            :null))}
          </div>
        </div>
        <div className="taskDiv">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "150px",
            }}
          >
            <h1>done</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6861/6861732.png"
              style={{ width: "40px", height: "40px" }}
            />
            {task.map((i) => (
                i.status=="done"?
              <div
                className="tasks">
                <h2>{i.task}</h2>
              </div>
            :null))}
          </div>
        </div>
      </div>
    )
};
export default GetTasks;
