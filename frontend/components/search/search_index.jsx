import React from 'react';
import PinCard from '../pin/pin_card';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <div>
          <PinCard pins={this.props.pins}></PinCard>
        </div>
      </div>
    );
  }
}

export default SearchIndex;
