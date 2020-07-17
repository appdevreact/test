import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
export class CredentialValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      credentials: false,
    };
  }
  handleChange = (event) => {
    const value = event.target.value;
    let newState = {};
    switch (event.target.id) {
      case "user_id": {
        this.setState({ userName: value });
        break;
      }
      case "password": {
        this.setState({ password: value });
        break;
      }
      default: {
        return newState;
      }
    }
  };
  onSubmit = (event) => {
    const { userName, password } = this.state;
    if (userName === "test" && password === "test") {
      this.setState({ credentials: true });
    }
  };

  render() {
    const { credentials } = this.state;
    return (
      <div>
        {!credentials && (
          <div className="form-group">
            <label htmlFor="usr">UserName:</label>
            <input
              type="text"
              className="form-control"
              id="user_id"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
        )}
        {credentials && <>true</>}
      </div>
    );
  }
}
export default CredentialValidation;
