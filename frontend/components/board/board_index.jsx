import React from 'react';
import BoardCard from './board_card';

class boardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.user.id;
    this.props.fetchAllBoards(id);
  }


  render() {
    return (
      <section className="user-container">
        <div className="user-profile">
          <img className="profile-picture" src={this.props.user.image_url}/>
          <div className="username">{this.props.user.username}</div>
        </div>

        <div className="user-boards">
          {this.props.boards.map(board => (
            <BoardCard board={board}></BoardCard>
          ))}
        </div>
      </section>
    );
  }
}

export default boardIndex;
