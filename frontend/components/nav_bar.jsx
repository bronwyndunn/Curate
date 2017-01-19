import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import SearchBarContainer from './search/search_bar_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    GreetingContainer.logout();
  }

  render() {
    return(
      <div className="navbar">
        <i className="fa fa-bars"></i>
        <SearchBarContainer />
        <div className="menu-links">
          <Link to='/'>Feed</Link>
          <br />
          <Link to='/home'>Profile</Link>
          <br />
          <button className="header-button" onClick={this.logout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
