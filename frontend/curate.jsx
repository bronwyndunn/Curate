import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { fetchAllBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from './actions/board_actions';
import Modal from 'react-modal';
import {fetchFeed, fetchBoardPins, fetchPins, fetchPin, createPin, deletePin} from './actions/pin_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.fetchAllBoards = fetchAllBoards;
  window.fetchBoard = fetchBoard;
  window.fetchBoardPins = fetchBoardPins;
  window.store = store;
  window.fetchPins = fetchPins;
  window.fetchFeed = fetchFeed;
  window.fetchPin = fetchPin;
  window.createPin = createPin;
  window.deletePin = deletePin;

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
