import { GET_BOARD_LIST } from '../constants';

const initialState = JSON.parse(localStorage.getItem('boardsList')) || [];

export default (state = initialState, { type, boardName, id, data }) => {
  switch (type) {
    case GET_BOARD_LIST:
      return [...state, { boardName, id, data }];
    default:
      return state;
  }
};
