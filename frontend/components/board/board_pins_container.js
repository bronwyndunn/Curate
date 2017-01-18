import { connect } from 'react-redux';
import BoardPins from './board_pins';
import {fetchBoardPins} from '../../actions/pin_actions';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  pins: Object.keys(state.boardPins).map(key => state.boardPins[key])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBoardPins: (id) => dispatch(fetchBoardPins(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPins);
