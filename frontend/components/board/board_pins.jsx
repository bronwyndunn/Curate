
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


  render() {
    const {pins} = this.props;
    let boardTitle;
    let pinImages;
    if ( pins.length > 0 ) {

      pinImages = pins.map((pin, i) => (
        <div className="single-pin">
          <PinIndexItem pin={pin}></PinIndexItem>
        </div>
      ));

      boardTitle = pins[0].board_title;
    }
    // <li key={i}><img src={pin.image_url} /></li>

    return(
      <div className="pin-container">
        {boardTitle}
          <Masonry className="pin-index" elementType={'div'} >
          {pinImages}
          </Masonry>
      </div>
    );
  }
}

export default BoardPins;
