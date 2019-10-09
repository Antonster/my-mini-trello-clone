import { SET_ACTIVE_BOARD } from '../constants';

const initialState = {};

export default (state = initialState, { type, boardData }) => {
  switch (type) {
    case SET_ACTIVE_BOARD:
      return boardData;
    default:
      return state;
  }
};
