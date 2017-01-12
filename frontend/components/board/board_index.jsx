import React from 'react';

class boardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.params.user_id;
    this.props.fetchAllBoards(id);
  }

  render() {
    return (
      <div className="boards">
          {this.props.boards.map(board => (
            <div className="board-body" key={board.id}>
              <p className="board-title">{board.title}</p>
              <p className="board-description">{board.description}</p>
          </div>
          ))}
      </div>
    );
  }
}

export default boardIndex;
