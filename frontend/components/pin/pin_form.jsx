import Modal from 'react-modal';
import React from 'react';
import ModalStyle from '../modal_style';


class PinForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    title: "",
    description: "",
    image_url: this.props.imageUrl,
    board_id: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPin(this.state).then(this.closeModal);
  }

  render () {
    return(
      <div className="new-pin-form-container">
        <div className="pin-title">Create a Pin</div>
        <div className="new-pin-form">
          <form onSubmit={this.handleSubmit}>
            <img src={this.state.image_url} />
            <label> Pin name:
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="pin-name">
              </input>
            </label>

            <label> Pin description:
              <input
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="board-description">
              </input>
            </label>

            <select onChange={this.update("board_id")}>
              <option selected disabled>--Choose a board--</option>
              {
                this.props.user.boards.map(board =>
                  <option value={board.id} key={board.id}>{board.title}</option>
                )
              }
            </select>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default PinForm;
