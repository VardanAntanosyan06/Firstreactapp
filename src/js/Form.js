import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import '../css/form.css'


export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "your first name",
      lastName: "your last name",
      age: "your age",
      role: "your role",
      border: "8px solid rgb(255, 255, 255)"
    } }
  
  render() {
    
    return (
      <div id="item">
        <form>
        <h1>{this.state.firstName}</h1>
        <input type="text" defaultValue={this.state.firstName} onChange={(event)=>this.setState({firstName:event.target.value,border:"8px solid rgb(0, 195, 255)"})} />
        <h1>{this.state.lastName}</h1>
        <input  type="text" defaultValue = {this.state.lastName}  onChange={(event)=>this.setState({lastName:event.target.value,border:"8px solid rgb(0, 195, 255)"})}/>
        <h1>{this.state.age}</h1>
        <label forHtml="quantity">Quantity (between 10 and 50):</label>
        <input type="number" min="10" max="50" onChange={(event)=>this.setState({age:event.target.value,border:"8px solid rgb(0, 195, 255)"})} />
        <h1>{this.state.role}</h1>
        <input type="radio" name="role" value="admin"  onChange={event=>this.setState({role:event.target.value,border:"8px solid rgb(0, 195, 255)"})}/>
        <label forHtml="admin">admin</label>
        <input type="radio" name="role" value="worker" onChange={event=>this.setState({role:event.target.value,border:"8px solid rgb(0, 195, 255)"})}/>
        <label forHtml="worker">worker</label> <br />
        <input type="submit" id="submit"/>
      </form>
      </div>
    );
  }}
  