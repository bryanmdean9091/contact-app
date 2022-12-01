import React from "react";
import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="formWrap container-fluid">
      <form onSubmit={this.handleFormSubmit}>
        <div className="mb-2 mt-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mb-2 pw">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="formBtnBox">
        <button type="submit" className="btn btn-primary btn-md submit">
          Submit
        </button>
        </div>
      </form>
      </div>
    );
  }
}


export default LoginForm;
