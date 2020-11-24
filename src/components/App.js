import React, { Component } from "react";
import "../styles/App.css";

const genders = ["male", "female", "others"];

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
    this.setState({ [event.target.name]: event.target.value.trimStart() });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ message: "" });
    let name = this.state.name.trim();
    let email = this.state.email.trim();
    let phoneNumber = this.state.phoneNumber;
    let gender = this.state.gender.toLowerCase().trim().toLowerCase();
    let password = this.state.password.trim();
    if (
      name.length === 0 ||
      email.length === 0 ||
      gender.length === 0 ||
      password.length === 0 ||
      gender.length === 0
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
    if (gender !== "male" && gender !== "female" && gender !== "others") {
      this.setState({ message: "Please identify as male, female or others" });
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
    let username = email.substring(0, email.indexOf("@"));
    this.setState({ message: `Hello ${username}` });
  };
  render() {
    return (
      <div id="main">
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={this.handleSubmit}
        >
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
            data-testid="name"
            required={true}
          />
          <input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            type="email"
            placeholder="Email"
            data-testid="email"
            required={true}
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
            required={true}
            type="number"
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
            required={true}
          />
          <input type="submit" value="Submit" data-testid="submit" />
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
export default App;
