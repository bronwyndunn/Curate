import { connect } from 'react-redux';
import createBoard from '../../actions/board_actions';
import BoardForm from './board_form';

  const mapStateToProps = (state) => ({
    user: state.session.currentUser,
    board: state.boards.board
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
    createBoard: board => dispatch(createBoard(createBoard)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);
