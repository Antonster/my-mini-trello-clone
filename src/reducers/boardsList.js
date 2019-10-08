import { GET_BOARD_LIST, CREATE_NEW_LIST } from '../constants';

const initialState = JSON.parse(localStorage.getItem('boardsList')) || [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD_LIST: {
      const { boardName, id, data } = action;

      return [...state, { boardName, id, data }];
    }
    case CREATE_NEW_LIST: {
      const { activeBoardId, listName, id, tasks } = action;
      const boardIndex = state.findIndex((board) => board.id === activeBoardId);

      state[boardIndex].data.push({
        listName,
        id,
        tasks,
      });

      return [...state];
    }
    default:
      return state;
  }
};
