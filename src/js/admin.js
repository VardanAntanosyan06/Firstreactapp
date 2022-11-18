import ReactDOM from "react-dom";
import React, { Component, useEffect, useState  } from "react"; 
import "../css/admin.css";
import axios from "axios";

import Animation from "./Animation";

const AxiosConnect = (props) => {
  const [user, SetUser] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  

  useEffect(() => {
    axios.get("http://localhost:5000/get/allUsers")
      .then((result) => {
        //  console.log(result.length)
        SetUser(result.data.users);
        SetIsLoading(false)
      });
  },[]);
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
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
              <button style={{width:"40%",height:"40px",background:"green",color:"#fff",cursor:"pointer"}}>show Tasks</button>
              <button style={{width:"40%",height:"40px",background:"green",color:"#fff"}}>settings</button>
              </div>
            </div>
          ))
        )}
      </div>
    );
}

export default AxiosConnect;

