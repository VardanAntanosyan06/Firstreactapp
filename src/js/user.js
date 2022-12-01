import ReactDOM from "react-dom";
import React, { Component, useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "../css/user.css";
import axios from "axios";
import GetTasks from "./getTask";

const UserAcc = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useSearchParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get/user?id=${id.get("id")}`)
      .then((result) => {
        setUser(result.data);
      });
  }, []);

  return (
    <div>
      <h1>{user.firstName + "  " + user.lastName}</h1>
      <h2>{user.email}</h2>
      <GetTasks id={id.get("id")} />
    </div>
  );
};

export default UserAcc;
