import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {fetchAllBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from './actions/board_actions';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.store = configureStore();
  if (window.currentUser) {
    const preloadedState = {session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
