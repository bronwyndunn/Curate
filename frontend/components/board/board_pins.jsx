import EditBoardContainer from '../edit/edit_board_container';
import React from 'react';
import PinIndexItem from '../pin/pin_index_item';
var Masonry = require('react-masonry-component');


class BoardPins extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      url: "",
      user_id: this.props.currentUser,
      board_id: this.props.pins.board_id,
      image_url: ""
    };
  }

  componentDidMount() {
    this.props.fetchBoardPins(this.props.params.boardId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.boardId !== this.props.params.boardId) {
      this.props.fetchBoardPins(nextProps.params.boardId);
    }
  }


  render() {
    console.log(this.props.params.boardId);
    const {pins} = this.props;
    let boardTitle;
    let pinImages;
    let boardDescription;
    if ( pins.length > 0 ) {

      pinImages = pins.reverse().map((pin, i) => (
        <div className="single-pin">
          <PinIndexItem pin={pin}></PinIndexItem>
        </div>
      ));

      boardTitle = pins[0].board_title;
      boardDescription = pins[0].board_description;
    }
    // <li key={i}><img src={pin.image_url} /></li>

    return(
      <div className="board-pin-container">
        <div className="board-pin-info">
          <div className="board-pin-info-titles">
            <div className="board-pin-title">{boardTitle}</div>
            <div className="board-pin-description">{boardDescription}</div>
          </div>
          <div className="board-pin-info-items">
            <EditBoardContainer
              boardId={this.props.params.boardId}/>
          </div>
        </div>
        <div className="masonry-container">
            <Masonry className="pin-index" elementType={'div'} options={{isFitWidth: true}} >
            {pinImages}
            </Masonry>
          </div>
      </div>
    );
  }
}

export default BoardPins;
