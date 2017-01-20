import Modal from 'react-modal';
import {merge} from 'lodash';
import { Link, withRouter } from 'react-router';
import ModalStyle from '../modal_style';
import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'e6dhjw9j';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/bronwyndunn/upload';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinInfo: {
        title: "",
        description: "",
        url: "",
        board_id: this.props.pins.board_id,
        image_url: "",
      },
      modalOpen: false,
      modalType: 'newPin'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  update(field) {
    return e => this.setState({
      pinInfo:
        merge({}, this.state.pinInfo, {[field]: e.currentTarget.value})
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPin(this.state.pinInfo).then(this.closeModal);
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

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

    handleImageUpload(file) {
      let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

      upload.end((err, response) => {
        if (err) {
          console.log(err);
        }

        if (response.body.secure_url !== '') {
          console.log("success");
          console.log(this.state);
          this.setState({
            pinInfo:
              merge({}, this.state.pinInfo, {image_url: response.body.secure_url})
          });
        }
      });
    }

  render() {
    return(
      <div className="new-pin-container">
        <div className="floating-pin-button" onClick={this.openModal.bind(this, 'newPin')}>
            <i className="fa fa-plus"></i>
              <Modal
                contentLabel = "Modal"
                isOpen={this.state.modalOpen}
    					  onRequestClose={this.closeModal}
                style={ModalStyle}>
                <div className="new-pin-title">Create a Pin</div>
                <div className="new-pin-form">
                  <form onSubmit={this.handleSubmit}>
                    <label> Pin name:
                      <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        className="pin-name"
                        >
                      </input>
                    </label>

                    <label> Say something about this pin:
                      <input
                        type="text"
                        value={this.state.description}
                        onChange={this.update("description")}
                        className="pin-description"
                        >
                      </input>
                    </label>

                    <label>
                      <select onChange={this.update("board_id")}>
                        <option selected disabled>--Choose a board--</option>
                        {
                          this.props.currentUser.boards.map(board =>
                            <option value={board.id} key={board.id}>{board.title}</option>
                          )
                        }
                      </select>
                    </label>
                    <br />

                    <label className="new-pin-image">
                      <br />
                    </label>

                    <img src={this.state.pinInfo.image_url} />
                      <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>

                      </Dropzone>
                      <p className="new-pin-image-text">Drop an image or click to select a file.</p>

                      <input type="submit" value="Submit" />
                  </form>
                </div>
              </Modal>
        </div>
      </div>
    );
  }
}

export default Home;
