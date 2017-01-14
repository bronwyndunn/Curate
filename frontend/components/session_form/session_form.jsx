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
  this.guestSignIn = this.guestSignIn.bind(this);
  }

  redirect() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  guestSignIn() {
    const guest = { username: 'guest', password: 'password'};
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
    let name;
    if (this.state.formType === "login") {
    header = "Log In";
    nav = <a href="#" id="reverse-form" onClick={this.changeForm}>{"Don't have an account? Sign Up."}</a>;
    } else {
    header = "Sign Up";
    nav = <a href="#" id="reverse-form" onClick={this.changeForm}>Already a member? <Link to="/login" className="link-to-login">Log In</Link></a>;
    }
    return (
      <div className="background">
      <div className="login-form-container">
        <h1>Curate</h1>
        <h2>Collect your inspiration</h2>
        <div className="login-form-box">
        <form onSubmit={this.handleSubmit} >
          <ul className="form-errors">
            {this.renderErrors()}
          </ul>
          <br/>
          <div className="login-form">
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                placeholder="Username" />
            </label>
          <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                placeholder="Password" />
            </label>
          <br/>
            </div>
            <input className="submit-button" type="submit" value={header} />
        </form>
        <br />
        <button id="guest-signin" onClick={this.guestSignIn}>Sign in with a guest account</button>
        <br />
        {nav}
      </div>
      </div>
        <br/>
      </div>
    );
  }
}

export default withRouter(SessionForm);
