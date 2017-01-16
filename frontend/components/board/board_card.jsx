import React from 'react';
import BoardPin from './board_pin';

class BoardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: this.props.currentUser
    };
  }

  ComponentWillReceiveProps(nextProps) {
    this.setState({ title: nextProps.board.title });
    this.setState({ description: nextProps.board.description });
  }

  render() {
    return (
      <section className="board-card-container">
        <div className="board-card">
          <div className="board-card-title">{this.props.board.title}</div>
          <div className="board-card-body">{this.props.board.description}</div>
          <div className="pin-images">

          </div>
        </div>
      </section>
    );
  }
}

export default BoardCard;
