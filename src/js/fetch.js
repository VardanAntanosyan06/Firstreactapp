import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

const Fetch = ()=>{
    const [user,SetUser] = useState();

    fetch('https://apiformyproject.herokuapp.com/add/getAllUsers')
    .then(data => data.json())
    .then(result=>{
        console.log(result);
        result.forEach(el => {
            
        });
})
return <div>
    <h1>{user+"-"}+a</h1>
    <h2>a</h2>
    </div>
}   

export default Fetch;