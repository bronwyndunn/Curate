import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="navbar">
        <i className="fa fa-bars"></i>
        <div className="menu-links">
          <Link to='/'>Feed</Link>
          <br />
          <Link to='/home'>Profile</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
