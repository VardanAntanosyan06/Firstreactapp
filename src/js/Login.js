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
         <button class="btn" type="submit">
            Log in
          </button>
         </Link>
    
        </div>
      </form>
    </div>
  )}

  
export default Login;
