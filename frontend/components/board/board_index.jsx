import React from 'react';
import BoardCard from './board_card';
import Modal from 'react-modal';
import ModalStyle from '../modal_style';

class boardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      modalOpen: false,
      modalType: 'newBoard'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const id = this.props.user.id;
    this.props.fetchAllBoards(id);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    const board = this.state;
    this.props.createBoard({ board }).then(this.closeModal);
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

  render() {
    return (
      <section className="user-container">
        <div className="user-profile">
          <img className="profile-picture" src={this.props.user.image_url}/>
          <div className="username">{this.props.user.username}</div>
        </div>

        <div className="user-boards">
          <div className="new-board" onClick={this.openModal.bind(this, 'newBoard')}>
            <Modal
              contentLabel = "Modal"
              isOpen={this.state.modalOpen}
  					  onRequestClose={this.closeModal}
              style={ModalStyle}>
              <div className="board-title">Create a Board</div>
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
            <div className="new-board-icon">
              <i className="fa fa-plus-circle"></i>
            </div>
          </div>
          {this.props.boards.map(board => (
            <BoardCard board={board}></BoardCard>
          ))}
        </div>
      </section>
    );
  }
}

export default boardIndex;
