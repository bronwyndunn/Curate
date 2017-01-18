import { merge } from 'lodash';

import {
  RECEIVE_BOARD_PINS} from '../actions/pin_actions';

const boardPinReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARD_PINS:
      return action.pins;
    default:
      return state;
  }
};

export default boardPinReducer;
