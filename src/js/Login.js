import React from "react";
import ReactDOM from "react-dom";
import "../css/login.css"
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div id="bg"></div>
      <form method="post">
        <div class="form-field">
          <input type="email" placeholder="Email / Username" required />
        </div>

        <div class="form-field">
          <input type="password" placeholder="Password" required />{" "}
        </div>

        <div class="form-field">
         <Link to="admin" >
         <button class="btn">
            Log in
          </button>
         </Link>
    
        </div>
      </form>
    </div>
  );
  fetch("https://jsonplaceholder.typicode.com/posts", {

    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
};

export default Login;
