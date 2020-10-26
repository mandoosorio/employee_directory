import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Emplrow from "./components/Emplrow";

var i;
var employees;
var hidden;

if (JSON.parse(localStorage.getItem("employeeData")) == null || localStorage.getItem("employeeData") === "[]") {
  employees = [];
  i = 0;
  hidden = "hide";
  console.log("is null");
} else {
  console.log("not null");
  employees = JSON.parse(localStorage.getItem("employeeData"));
  for (var j = 0; j < employees.length; j++) {
    if (i === employees[j].id) {
      i++;
    } else if (i + 1  === employees[j].id) {
      i += 2;
    }
    else {
      i = employees.length + 1;
    }
  }
  hidden = "";
}

console.log("id", i);

class App extends Component {

  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
    localStorage.setItem("employeeData", JSON.stringify(employees));
    if(employees.length === 0) {
      hidden = "hide";
    }
  };

  handleFormSubmit = event => {
  
    console.log(employees);

      event.preventDefault();

      if(
      document.getElementById("first").value.trim() === "" ||
      document.getElementById("last").value.trim() === "" ||
      document.getElementById("dob").value.trim() === "" ||
      document.getElementById("email").value.trim() === "" ||
      document.getElementById("phone").value.trim() === "" ||
      document.getElementById("address").value.trim() === ""
      ) {
        alert("Please fill out all fields.");
        return;
      }

      employees.push({
        id: i + 1,
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        dob: document.getElementById("dob").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value
      });

      document.getElementById("first").value = "";
      document.getElementById("last").value = "";
      document.getElementById("dob").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";

      console.log("emploi", employees);

      i++;

      localStorage.setItem("employeeData", JSON.stringify(employees));

      this.setState({ employees });

      hidden="";
      
  };

  alphabeticalFilterFirst = () => {
    employees = employees.sort((a, b) => a.first.localeCompare(b.first));
    localStorage.setItem("employeeData", JSON.stringify(employees));
    this.setState({ employees });
  }

  alphabeticalFilterLast = () => {
    employees = employees.sort((a, b) => a.last.localeCompare(b.last));
    localStorage.setItem("employeeData", JSON.stringify(employees));
    this.setState({ employees });

  }

  render() {
    console.log(employees);
    
    return (
      <div className="App">
        <header className="App-header">
          <br></br>
          <a href="#rows" id={hidden} className="btn btn-primary directory">View Directory</a>
          <img src={logo} className="App-logo" alt="logo" />
          <div id="main">
            <form id="left">
              <div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">First Name</label>
                  <input
                  type="firstname" 
                  className="form-control" 
                  id="first"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Last Name</label>
                  <input 
                  type="lastname" 
                  className="form-control" 
                  id="last"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">DOB</label>
                  <input 
                  type="firstname" 
                  className="form-control" 
                  id="dob" 
                  placeholder="(MM/DD/YYYY)"></input>
                </div>
              </div>
            </form>
      
            <form id="right">
              <div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                  type="email" 
                  className="form-control" 
                  id="email"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Phone</label>
                  <input
                  type="phone" 
                  className="form-control" 
                  id="phone"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Address</label>
                  <input
                  type="address" 
                  className="form-control" 
                  id="address"></input>
                </div>
              </div>
            </form>
      
            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
            <br></br>
            <br></br>
          <button type="submit" className="btn btn-primary" id={hidden} onClick={this.alphabeticalFilterFirst}>Filter by First Name</button>
          <span id={hidden}> || </span>
          <button type="submit" className="btn btn-primary" id={hidden} onClick={this.alphabeticalFilterLast}>Filter by Last Name</button>
          </div>
          <br></br>
        </header>
  
        <ul className="list-group list-group-horizontal" id={hidden}>
        <li className="list-group-item list-group-item-dark col-2">First Name</li>
        <li className="list-group-item list-group-item-dark col-2">Last Name</li>
        <li className="list-group-item list-group-item-dark col-2">DOB</li>
        <li className="list-group-item list-group-item-dark col-2">Email</li>
        <li className="list-group-item list-group-item-dark col-2">Phone</li>
        <li className="list-group-item list-group-item-dark col-2">Address</li>
        </ul>
        <div id="rows">
          {this.state.employees.map(employee => (
            <Emplrow
              removeEmployee={this.removeEmployee}
              id={employee.id}
              first={employee.first}
              last={employee.last}
              dob={employee.dob}
              email={employee.email}
              phone={employee.phone}
              address={employee.address}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;