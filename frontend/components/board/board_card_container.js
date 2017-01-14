import { connect } from 'react-redux';
import BoardCard from './board_card';
import {fetchBoard,
  createBoard,
  updateBoard,
  deleteBoard} from '../../actions/board_actions';

  const mapStateToProps = (state) => ({
    user: state.session.currentUser,
    board: state.boards.board
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchBoard: id => dispatch(fetchBoard(id)),
    updateBoard: board => dispatch(updateBoard(board)),
    createBoard: board => dispatch(createBoard(createBoard)),
    deleteBoard: id => dispatch(deleteBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCard);
