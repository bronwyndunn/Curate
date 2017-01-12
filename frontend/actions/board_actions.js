import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_NEW_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";

export const fetchAllBoards = (userId) => dispatch => (
  BoardApiUtil.fetchAllBoards(userId).then(data => dispatch(receiveBoards(data)))
);

export const fetchBoard = (id) => dispatch => (
  BoardApiUtil.fetchBoard(id).then(data => dispatch(receiveBoard(data)))
);

export const createBoard = (board) => dispatch => (
  BoardApiUtil.createBoard(board).then(data => dispatch(receiveNewBoard(data)))
);

export const updateBoard = (board) => dispatch => (
  BoardApiUtil.updateBoard(board).then(data => dispatch(receiveNewBoard(data)))
);

export const deleteBoard = (id) => dispatch => (
  BoardApiUtil.deleteBoard(id).then(data => dispatch(removeBoard(data)))
);


export const receiveBoards = (boards) => ({
  //index
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = (board) => ({
  //show
  type: RECEIVE_BOARD,
  board
});

export const receiveNewBoard = (board) => ({
  //new and update
  type: RECEIVE_NEW_BOARD,
  board
});

export const removeBoard = (board) => ({
  //delete
  type: REMOVE_BOARD,
  board
});
