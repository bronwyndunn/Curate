
import { connect } from 'react-redux';
import { fetchFeed,
fetchPins,
fetchPin,
createPin,
deletePin} from '../../actions/pin_actions';
import PinCard from './pin_card';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  pins: Object.keys(state.pins).map((key) => state.pins[key]),
  pin: state.pins.pin
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: (userId) => dispatch(fetchFeed(userId)),
  fetchPins: (userId) => dispatch(fetchPins(userId)),
  fetchPin: (id) => dispatch(fetchPin(id)),
  createPin: (pin) => dispatch(createPin(pin)),
  deletePin: (id) => dispatch(deletePin(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinCard);
