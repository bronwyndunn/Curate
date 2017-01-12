import { connect } from 'react-redux';
import boardIndex from './board_index';
import {fetchAllBoards,
fetchBoard,
createBoard,
updateBoard,
deleteBoard} from '../../actions/board_actions';

const mapStateToProps = (state) => ({
  boards: state.boards
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  fetchBoard: (id) => dispatch(fetchBoard(id)),
  createBoard: (board) => dispatch(createBoard(board)),
  updateBoard: (board) => dispatch(updateBoard(board)),
  deleteBoard: (id) => dispatch(deleteBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(boardIndex);
