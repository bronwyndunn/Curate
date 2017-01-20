import React from 'react';
import { Link } from 'react-router';
import {hashHistory} from 'react-router';
import GreetingContainer from '../greeting/greeting_container';
import SearchBarContainer from '../search/search_bar_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.logout().then(hashHistory.push('/signup'));

  }

  render() {
    return(
      <div className="navbar">
        <i className="fa fa-bars"></i>
        <div className="menu-links">
          <SearchBarContainer />
          <Link to='/'>Feed</Link>
          <Link to='/home'>Profile</Link>
          <div id="grey-board-title">Boards</div>
          {
            this.props.user.boards.map(function(board, idx) {
              const boardLink = `/boards/${board.id}`;
              return (
                <div className="board-links" key={board.id}>
                  <Link to={boardLink} key={board.id}>{board.title}</Link>
                </div>
              );
            }, this)
          }
          <button className="header-button" onClick={this.handleClick}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
