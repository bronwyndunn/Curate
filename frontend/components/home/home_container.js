import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  pins: state.pins,
  pin: state.pins.pin
});

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
