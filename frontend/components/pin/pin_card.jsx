import React from 'react';
import PinIndexItem from './pin_index_item';
var Masonry = require('react-masonry-component');


class PinCard extends React.Component {
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
    this.props.fetchPins(this.props.user.id);
  }


  render() {
    const {pins} = this.props;
    let pinImages;
    if ( pins.length > 0 ) {

      pinImages = pins.map((pin, i) => (
        <div className="single-pin">
          <PinIndexItem pin={pin}></PinIndexItem>
        </div>
      ));
    }
    // <li key={i}><img src={pin.image_url} /></li>

    return(
      <div className="pin-container">
          <Masonry className="pin-index" elementType={'div'} >
          {pinImages}
          </Masonry>
      </div>
    );
  }
}

export default PinCard;

// {this.props.user.pins.title}
// {this.props.user.pins.image_url}
