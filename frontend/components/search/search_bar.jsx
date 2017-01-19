import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.redirectToSearch = this.redirectToSearch.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      query: ""
    };
  }

  update() {
    return e => this.setState({
      query: e.target.value
    });
  }

  handleSearch(e) {
    if (e.keyCode === 13) {
      this.redirectToSearch(e);
    }
  }

  redirectToSearch(e) {
    this.props.searchPins(this.state).then(hashHistory.push('/search'));
  }


  render() {
    return(
      <form className="search-form" onSubmit={this.redirectToSearch}>
        <input type="text"
          className="search-bar"
          value={this.state.query}
          onChange={this.update()}
          placeholder="Search a pin"></input>
      </form>
    );
  }
}

export default SearchBar;
