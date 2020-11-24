import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "Male",
      phoneNumber: "",
      password: "",
      message: ""
    };
  }
  isAlphaNumeric = (inputText) => {
    let letterNumber = /^[0-9a-zA-Z ]*$/;
    return inputText.match(letterNumber);
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ message: "" });
    let name = this.state.name;
    let email = this.state.email;
    let phoneNumber = this.state.phoneNumber;
    let gender = this.state.gender.toLowerCase();
    let password = this.state.password;

    if (
      name.length === 0 ||
      email.length === 0 ||
      gender.length === 0 ||
      phoneNumber.length === 0 ||
      password.toString().length === 0
    ) {
      this.setState({ message: "All fields are mandatory" });
      return;
    }
    if (!this.isAlphaNumeric(name)) {
      this.setState({ message: "Name is not alphanumeric" });
      return;
    }
    if (email.toString().indexOf("@") === -1) {
      this.setState({ message: "Email must contain @" });
      return;
    }
    if (isNaN(phoneNumber)) {
      this.setState({ message: "Phone Number must contain only numbers" });
      return;
    }
    if (password.trim().length < 6) {
      this.setState({ message: "Password must contain atleast 6 letters" });
      return;
    }
    if (gender !== "male" && gender !== "female" && gender !== "others") {
      this.setState({ message: "Please identify as male, female or others" });
      return;
    }
    let username = email.substring(0, email.indexOf("@"));
    this.setState({ message: `Hello ${username}` });
  };
  render() {
    return (
      <div id="main">
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
            data-testid="name"
          />
          <input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            type="text"
            placeholder="Email"
            data-testid="email"
          />
          <select
            data-testid="gender"
            name="gender"
            value={this.state.gender}
            onChange={this.handleInputChange}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
          <input
            value={this.state.phoneNumber}
            onChange={this.handleInputChange}
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            data-testid="phoneNumber"
          />
          <input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            type="Password"
            placeholder="Password"
            data-testid="password"
          />
          <button data-testid="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
export default App;
