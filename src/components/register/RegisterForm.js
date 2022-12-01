import React from "react";
import "./RegisterForm.css";

class RegisterForm extends React.Component {
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
      <div className="regPgWrap">
        <div className="registerWrap container-fluid">
          <form onSubmit={this.handleFormSubmit}>
            <div>
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
            <div>
              <label htmlFor="password" className="form-label">
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
            <div className="formBtnBox mt-2">
              <button type="submit" className="btn btn-primary btn-md submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
