import Modal from 'react-modal';
import React from 'react';
import ModalStyle from '../modal_style';

class EditBoardForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    title: "",
    description: "",
    id: this.props.boardId,
    modalOpen: false,
    modalType: 'editBoard'

  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
}

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
    e.preventDefault();
    const board = this.state;
    this.props.updateBoard( board ).then(this.closeModal);
  }



	openModal(modalType) {
		this.setState({
			modalOpen: true,
			modalType
		});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

  render () {
    console.log(this.state.board_id);
    return(
      <div className="new-board-container">
        <i className="fa fa-cog" onClick={this.openModal.bind(this, 'editBoard')}></i>
          <Modal
            contentLabel = "Modal"
            isOpen={this.state.modalOpen}
					  onRequestClose={this.closeModal}
            style={ModalStyle}>
            <div className="board-title">Edit Board</div>
            <div className="new-board-form">
              <form onSubmit={this.handleSubmit}>
                <label> Board name:
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                    className="board-name">
                  </input>
                </label>

                <label> Board description:
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
          </Modal>
      </div>
    );
  }
}

export default EditBoardForm;
