import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import "../css/fetch.css";
import Animation from "./Animation";

const Fetch = () => {
  const [user, SetUser] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://apiformyproject.herokuapp.com/add/getAllUsers")
      .then((data) => data.json())
      .then((result) => {
        //  console.log(result.length)
        SetUser(result);
        SetIsLoading(false)
      });
  }, [user]);

  return (
    <div id="myDiv">
      {isLoading ? (
        <Animation />
      ) : (
        user.map((i) => (
          <div className="items">
            <img
              src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
              width="100px"
              height="100px"
            />
            <h1>{i.firstName + i.lastName}</h1>
            <h3>{i.email}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default Fetch;
