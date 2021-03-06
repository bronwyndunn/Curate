import * as PinApiUtil from '../util/pin_api_util';
export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_BOARD_PINS = "RECEIVE_BOARD_PINS";

export const fetchFeed = (userId) => dispatch => (
  PinApiUtil.fetchFeed(userId).then(data => dispatch(receivePins(data)))
);

export const fetchPins = (userId) => dispatch => (
  PinApiUtil.fetchPins(userId).then(data => dispatch(receivePins(data)))
);

export const fetchPin = (id) => dispatch => (
  PinApiUtil.fetchPin(id).then(data => dispatch(receivePin(data)))
);

export const createPin = (pin) => dispatch => (
  PinApiUtil.createPin(pin).then(data => dispatch(receivePin(data)))
);

export const deletePin = (id) => dispatch => (
  PinApiUtil.deletePin(id).then(data => dispatch(removePin(data)))
);

export const fetchBoardPins = (boardId) => dispatch => (
  PinApiUtil.fetchBoardPins(boardId).then(pins => dispatch(receiveBoardPins(pins)))
);

export const searchPins = (keyword) => dispatch => (
  PinApiUtil.searchPins(keyword).then(pins => dispatch(receivePins(pins)))
);

export const receivePins = (pins) => ({
  type: RECEIVE_PINS,
  pins
});

export const receivePin = (pin) => ({
  type: RECEIVE_PIN,
  pin
});

export const removePin = (pin) => ({
  type: REMOVE_PIN,
  pin
});

export const receiveBoardPins = (pins) => ({
  type: RECEIVE_BOARD_PINS,
  pins
});
