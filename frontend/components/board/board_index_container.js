import { connect } from 'react-redux';
import boardIndex from './board_index';
import {fetchAllBoards} from '../../actions/board_actions';

const mapStateToProps = (state) => ({
  boards: Object.keys(state.boards).map(key => state.boards[key])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllBoards: (id) => dispatch(fetchAllBoards(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(boardIndex);
