import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateTaskStatus = (id,status) => {
    console.log(id,status);
  axios
    .post("http://localhost:5000/add/updateTaskStatus",{id,status})
    .then((result) => {
      console.log(result.data);
    });
};

export default UpdateTaskStatus;
