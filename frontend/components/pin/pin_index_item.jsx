import React from 'react';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <div className="pin-info">
        <div className="pin-title">{this.props.pin.title}</div>
        <div className="pin-description">{this.props.pin.description}</div>
        <img className="pin-image" src={this.props.pin.image_url}/>
      </div>
    );
  }
}

export default PinIndexItem;
