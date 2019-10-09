import {
  NEW_BOARD,
  NEW_LIST,
  GET_BOARD_LIST,
  CREATE_NEW_LIST,
  SET_ACTIVE_BOARD,
  CREATE_NEW_TASK,
} from '../constants';

export const setNewBoardAction = (status) => ({
  type: NEW_BOARD,
  status,
});

export const setNewListAction = (status) => ({
  type: NEW_LIST,
  status,
});

export const setActiveBoardAction = (boardData) => ({
  type: SET_ACTIVE_BOARD,
  boardData,
});

export const getBoardsListAction = ({ boardName, id, data }) => ({
  type: GET_BOARD_LIST,
  boardName,
  id,
  data,
});

export const createNewListAction = ({
  activeBoardIndex,
  listName,
  id,
  tasks,
}) => ({
  type: CREATE_NEW_LIST,
  activeBoardIndex,
  listName,
  id,
  tasks,
});

export const createNewTaskAction = ({
  activeBoardIndex,
  activeListIndex,
  taskName,
  id,
  isComplete,
}) => ({
  type: CREATE_NEW_TASK,
  activeBoardIndex,
  activeListIndex,
  taskName,
  id,
  isComplete,
});
