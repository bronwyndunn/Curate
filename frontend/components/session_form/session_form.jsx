import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: "",
          formType: "signup"
      };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.renderErrors = this.renderErrors.bind(this);
  this.update = this.update.bind(this);
  this.changeForm = this.changeForm.bind(this);
  this.redirect = this.redirect.bind(this);
  this.guestSignIn = this.redirect.bind(this);
  }

  redirect() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  guestSignIn() {
    const guest = { username: 'guest', password: 'password' };
    this.props.login(guest).then(() => this.redirect());
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password};
    if (this.state.formType === "signup") {
      this.props.signup(user).then(() => this.redirect());
    } else {
      this.props.login(user).then(() => this.redirect());
    }
  }


    update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  changeForm() {
    if (this.state.formType === "signup") {
      this.setState({ formType: "login"});
    } else {
      this.setState({ formType: "signup"});
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
            <li key={idx}>
              {error}
            </li>
          ))
        }
      </ul>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {

    let header;
    let nav;
    if (this.state.formType === "login") {
    header = <h1>Log In</h1>;
    nav = <button id="reverse-form" onClick={this.changeForm}>{"Don't have an account? Sign Up."}</button>;
    } else {
    header = <h1>Sign Up</h1>;
    nav = <button id="reverse-form" onClick={this.changeForm}>{"Already a member? Log In."}</button>;
    }
    return (
      <div className="login-form-container">
        {header}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Curate
          {this.renderErrors()}
          <div className="login-form">
            <label> Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input" />
            </label>
            <label> Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <button id="guest-login" onClick={this.guestSignIn}>Continue as a guest</button>
        <br/>
        {nav}
      </div>
    );
  }
}

export default withRouter(SessionForm);
