import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import boardReducer from './board_reducer';
import pinReducer from './pin_reducer';
import boardPinReducer from './board_pin_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  boards: boardReducer,
  pins: pinReducer,
  boardPins: boardPinReducer
});

export default rootReducer;
