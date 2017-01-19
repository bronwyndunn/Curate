import { connect } from 'react-redux';
import {searchPins} from '../../actions/pin_actions';
import SearchIndex from './search_index';

  const mapStateToProps = (state) => ({
    pins: Object.keys(state.pins).map((key) => state.pins[key])
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    searchPins: keyword => dispatch(searchPins(keyword))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
