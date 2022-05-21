import React, { Component } from "react";
import Newpage from "./final";
import "./feedback.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      department: "",
      rating: "",
      employees: [],
      formDisplay: true,
      newDisplay: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleStateChange = () => {
    this.setState({
      formDisplay: true,
      newDisplay: false,
    });
  };

  handleButtonClicked = (event) => {
    event.preventDefault();

    const tempObj = {
      name: this.state.name,
      dept: this.state.department,
      rate: this.state.rating,
    };
    this.state.employees.push(tempObj);
    this.setState({
      name: "",
      deptartment: "",
      rating: "",
      formDisplay: false,
      newDisplay: true,
    });
  };

  render() {
    return (
      <>
        {this.state.formDisplay && (
          <>
            <div className="form">
              <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
              <form onSubmit={this.handleButtonClicked}>
                <label>Name : </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <br />

                <label>Department : </label>
                <input
                  type="text"
                  id="dept"
                  name="dept"
                  value={this.state.department}
                  onChange={this.handleChange}
                />
                <br />

                <label>Rating : </label>
                <input
                  type="text"
                  id="rate"
                  name="rate"
                  value={this.state.rating}
                  onChange={this.handleChange}
                />
                <br />
                <button type="submit" onClick={this.handleButtonClicked}>
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
        {this.state.newDisplay && (
          <Newpage
            employee={this.state.employees}
            stateObj={this.state}
            statechange={this.handleStateChange}
          />
        )}
      </>
    );
  }
}

export default Form;