import { connect } from 'react-redux';
import boardIndex from './board_index';
import {createBoard, fetchAllBoards} from '../../actions/board_actions';

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  boards: Object.keys(state.boards).map(key => state.boards[key])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllBoards: (id) => dispatch(fetchAllBoards(id)),
  createBoard: (board) => dispatch(createBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(boardIndex);
