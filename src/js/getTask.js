import ReactDOM from "react-dom";
import React, { Component, useEffect, useReducer, useState } from "react";
import axios from "axios";
import Animation from "./Animation";
import "../css/getTask.css";

import Plus from "./plustask";
import UpdateTaskStatus from "./changeTaskStatus";


const GetTasks = (props) => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [changeTaskStatus, SetChangeTaskStatus] = useState(false);
  const [id, setId] = useState(null);
  const [status, setStatus] = useState(null);


  useEffect(() => {
    axios
      .get(`http://localhost:5000/get/user?id=${props.id}`)
      .then((result) => {
        setTask(result.data.Tasks);
        setLoading(false);
      });
  }, [status]);

  console.log(task);
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
          {task.map((i) =>
            i.status == "sent" ? (
              <div
                className="tasks"
                onClick={() => {
                  SetChangeTaskStatus(!changeTaskStatus);
                  setId(i.id);
                }}
              >
                <h2>{i.task}</h2>
              </div>
            ) : null
          )}
        </div>
      ) : (
        <div className="tasks">
          <h1>yet not tasks</h1>
        </div>
      )}
      {task.length > 0 ? (
        <div className="taskDiv">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "220px",
            }}
          >
            <h1>inProcess</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4394/4394553.png"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          {task.map((i) =>
            i.status == "inProcess" ? (
              <div className="tasks">
                <h2>{i.task}</h2>
              </div>
            ) : null
          )}
         <div onClick={()=>setStatus("inProcess")}><Plus open={changeTaskStatus} id={id} /></div>
        </div>
      ) : null}
      {task.length > 0 ? (
        <div className="taskDiv">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "220px",
            }}
          >
            <h1>done</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6861/6861732.png"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          {task.map((i) =>
            i.status == "done" ? (
              <div className="tasks">
                <h2>{i.task}</h2>
              </div>
            ) : null
          )}
          <div onClick={()=>setStatus("done")}><Plus open={changeTaskStatus} id={id}/></div>
          {console.log(status,id)}
          {status? UpdateTaskStatus(id,status) :null}

        </div>
      ) : null}
    </div>
  );
};
export default GetTasks;
