import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import boardReducer from './board_reducer';
import pinReducer from './pin_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  boards: boardReducer,
  pins: pinReducer
});

export default rootReducer;
