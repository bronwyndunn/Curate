
import { connect } from 'react-redux';
import { fetchFeed,
fetchPins,
fetchPin,
createPin,
deletePin} from '../../actions/pin_actions';
import PinCard from './pin_card';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  pins: state.pins,
  pin: state.pins.pin
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFeed: (userId) => dispatch(fetchFeed(userId)),
  fetchPins: (userId) => dispatch(fetchFeed(userId)),
  fetchPin: (id) => dispatch(fetchPin(id)),
  createPin: (pin) => dispatch(createPin(pin)),
  deletePin: (id) => dispatch(deletePin(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinCard);
