import React, { Component } from "react";
import "./feedback.css";

class final extends Component {
  change = () => {
    this.props.statechange();
  };

  render() {
    return (
      <div className="form">
        <h1 className="heading">EMPLOYEE FEEDBACK DATA</h1>
        <div className="container">
          {this.props.employee.length > 0 &&
            this.props.employee.map((value, index) => {
              return (
                <div className="box">
                  {index + 1}. {value.name} | {value.dept} | {value.rate}
                </div>
              );
            })}
        </div>
        <button onClick={this.change}>GO BACK</button>
      </div>
    );
  }
}

export default final;