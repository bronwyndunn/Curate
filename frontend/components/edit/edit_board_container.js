import { connect } from 'react-redux';
import {updateBoard} from '../../actions/board_actions';
import EditBoardForm from './edit_board';

  const mapStateToProps = (state) => ({
    user: state.session.currentUser,
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    updateBoard: board => dispatch(updateBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBoardForm);
