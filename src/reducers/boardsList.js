import { GET_BOARD_LIST, CREATE_NEW_LIST, CREATE_NEW_TASK } from '../constants';

const initialState = JSON.parse(localStorage.getItem('boardsList')) || [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD_LIST: {
      const { boardName, id, data } = action;

      return [...state, { boardName, id, data }];
    }
    case CREATE_NEW_LIST: {
      const { activeBoardIndex, listName, id, tasks } = action;

      state[activeBoardIndex].data.push({
        listName,
        id,
        tasks,
      });

      return [...state];
    }
    case CREATE_NEW_TASK: {
      const {
        activeBoardIndex,
        activeListIndex,
        taskName,
        id,
        isComplete,
      } = action;

      state[activeBoardIndex].data[activeListIndex].tasks.push({
        taskName,
        id,
        isComplete,
      });

      return [...state];
    }
    default:
      return state;
  }
};
