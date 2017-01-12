import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import boardReducer from './board_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  boards: boardReducer
});

export default rootReducer;
