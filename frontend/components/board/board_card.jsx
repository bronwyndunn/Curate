import React from 'react';
import BoardPin from './board_pin';
import {hashHistory} from 'react-router';

class BoardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: this.props.currentUser
    };
    this.redirectToBoard = this.redirectToBoard.bind(this);
  }

  redirectToBoard() {
    hashHistory.push(`boards/${this.props.board.id}`);
  }

  ComponentWillReceiveProps(nextProps) {
    this.setState({ title: nextProps.board.title });
    this.setState({ description: nextProps.board.description });
  }

  render() {
    return (
      <section className="board-card-container">
        <div className="board-card" onClick={this.redirectToBoard}>
          <div className="board-card-body">{this.props.board.description}</div>
          <div className="card-board-images">
            <div className="primary-board-card-image" >
              <img src={this.props.board.primary_image} />
            </div>
            <div className="smaller-images">
              <div className="board-card-image">
                <img src={this.props.board.secondary_image} />
              </div>
              <div className="board-card-image">
                <img src={this.props.board.tertiary_image} />
              </div>
            </div>
            <div className="board-card-title">{this.props.board.title}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default BoardCard;
