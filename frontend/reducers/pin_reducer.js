import { merge } from 'lodash';

import {
  RECEIVE_PINS,
  RECEIVE_PIN,
  REMOVE_PIN
} from '../actions/pin_actions';

const pinReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PINS:
      return merge({}, action.pins);
    case RECEIVE_PIN:
      return merge({}, {[action.pin.id]: action.pin});
    case REMOVE_PIN:
      return merge({}, {[action.pin.id]: action.pin});
    default:
      return state;
  }
};

export default pinReducer;
