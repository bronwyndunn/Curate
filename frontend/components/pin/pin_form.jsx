import Modal from 'react-modal';
import React from 'react';
import ModalStyle from '../modal_style';


class PinForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    title: "",
    description: "",
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
      <div className="new-pin-container">
        <div className="pin-title">Create a Pin</div>
        <div className="new-pin-form">
          <form onSubmit={this.handleSubmit}>
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

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default PinForm;
