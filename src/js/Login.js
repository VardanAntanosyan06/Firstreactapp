import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import "../css/login.css";
import Form from "../js/Form";
import UserAcc from "./user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [status, setStatus] = useState({ success: false, user: null });

  useEffect(() => {
  
    const time = setTimeout(() => {
      axios
        .post("http://localhost:5000/login/", { email, password })
        .then((res) => {
          console.log(res.data);
          if (res.data.success)
            setStatus({ success: true, user: res.data.condidat });
          else {
            setStatus(false);
          }
          console.log(status);
        });
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, [password, email]);

  return (
    <div>
      <UserAcc id={1}/>
      {status.user ? (
        <div
          style={{
            marginBottom: "20px",
            height: "45px",
            background: "rgba(169,169,169,0.5)",
            boxShadow: "-27px 41px 276px 16px rgba(255,0,0,)",
            textAlign: "center",
            color: "red",
          }}
        >
          <h2>{status.user.firstName + "      " + status.user.lastName}</h2>
        </div>
      ) : (
        <div className="waviy">
          <span>LOGIN</span>
        </div>
      )}
      <div id="bg"></div>
      <form method="post">
        <div className="form-field">
          <input
            type="email"
            placeholder="Email / Username"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-field">
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value) && setStatus(false)}
            />
          <button
            onClick={() => setPasswordShown(!passwordShown)}
            type="button"
            className="showbtn"
          >
            {passwordShown ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2767/2767146.png"
                width="25px"
                height="25px"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2767/2767194.png"
                width="25px"
                height="25px"
              />
            )}
          </button>
        </div>
        {email === "" ? (
          <p>fill email input</p>
        ) : password === "" ? (
          <p>fill password input</p>
        ) : status ? (
          <div className="form-field">
            <Link to="admin">
              <button className="btn">Log in</button>
            </Link>
          </div>
        ) : (
          <p style={{ color: "red" }}>invalid email or Password</p>
        )}
      </form>
    </div>
  );
};

export default Login;
