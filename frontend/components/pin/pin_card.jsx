import React from 'react';

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

  componentWillReceiveProps(nextProps) {
    this.setState({title: nextProps.pin.title });
    this.setState({description: nextProps.pin.description });
    this.setState({url: nextProps.pin.url });
    this.setState({board_id: nextProps.pin.board_id });
    this.setState({image_url: nextProps.pin.image_url });
  }

  render() {
    return(
      <div className="pin-container">
        {this.props.user.pins.title}
        {this.props.user.pins.image_url}
      </div>
    );
  }
}

export default PinCard;
