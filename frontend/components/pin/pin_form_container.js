import { connect } from 'react-redux';
import {createPin} from '../../actions/pin_actions';
import PinForm from './pin_form';

  const mapStateToProps = (state) => ({
    user: state.session.currentUser,
    pins: state.pins,
    pin: state.pins.pin
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    createPin: pin => dispatch(createPin(pin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinForm);
