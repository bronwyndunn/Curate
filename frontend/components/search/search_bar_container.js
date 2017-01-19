import { connect } from 'react-redux';
import {searchPins} from '../../actions/pin_actions';
import SearchBar from './search_bar';

  const mapStateToProps = (state) => ({
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    searchPins: keyword => dispatch(searchPins(keyword))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
