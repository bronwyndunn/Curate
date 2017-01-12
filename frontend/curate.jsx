import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchAllBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from './actions/board_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchAllBoards = fetchAllBoards;
  window.fetchBoard = fetchBoard;
  window.createBoard = createBoard;
  window.updateBoard = updateBoard;
  window.deleteBoard = deleteBoard;
  window.
  // let store;
  window.store = configureStore();
  if (window.currentUser) {
    const preloadedState = {session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
