import React from 'react';
import { Link } from 'react-router';

const BoardPin = ({ pins }) => {
  let pinsImageUrl =[null, null, null];
  let pinKeyArr = Object.keys(pins);
  for (var i = 0; i < 3; i++) {
    if (i < pinKeyArr.length) {
      pinsImageUrl[i] = pins[pinKeyArr[i]].image_url;
    }
  }

  let pinImages = pinsImageUrl.map((url, idx) => {
    if (url === null) {
      return "";
    }
    else {
      return (
        <img src={url} />
      );
    }
  });

    return(
      <div className="board-card-container">
        <h1>Pin Images</h1>
        <div className="pin-images">
          <div className="pin-large-picture">
            {pinImages[0]}
          </div>
          <div className="pin-small-picture">
            {pinImages[1]}
          </div>
          <div className="pin-small-picture">
            {pinImages[2]}
          </div>
        </div>
      </div>

  );
};

export default BoardPin;
