import React from 'react';
import Modal from 'react-modal';
import ModalStyle from '../modal_style';


class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalType: 'newPin'
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      <div className="pin-info" onClick={this.openModal}>

        <div className="pin-title">{this.props.pin.title}</div>
        <div className="pin-description">{this.props.pin.description}</div>
        <img className="pin-image" src={this.props.pin.image_url}/>

        <Modal
          contentLabel = "newPin"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>
          <div className="pin-modal-container">
            <img className="pin-modal-image" src={this.props.pin.image_url}/>
            <div className="pin-modal-info">
              <h3>{this.props.pin.title}</h3>
              <br />
              <h4>{this.props.pin.description}</h4>
            </div>
          </div>
        </Modal>
      </div>


    );
  }
}

export default PinIndexItem;
