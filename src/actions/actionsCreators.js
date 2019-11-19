import {
  NEW_BOARD,
  NEW_LIST,
  CREATE_NEW_BOARD,
  CREATE_NEW_LIST,
  CREATE_NEW_TASK,
  SET_TASK_STATUS,
  DRAG_HAPPENED,
} from '../constants';

export const setNewBoardAction = (status) => ({
  type: NEW_BOARD,
  status,
});

export const setNewListAction = (status) => ({
  type: NEW_LIST,
  status,
});

export const getBoardsListAction = (boardData) => ({
  type: CREATE_NEW_BOARD,
  boardData,
});

export const createNewListAction = ({ activeBoardId, listData }) => ({
  type: CREATE_NEW_LIST,
  activeBoardId,
  listData,
});

export const createNewTaskAction = ({
  activeBoardId,
  activeTasksListId,
  taskData,
}) => ({
  type: CREATE_NEW_TASK,
  activeBoardId,
  activeTasksListId,
  taskData,
});

export const setTaskStatusAction = ({
  activeBoardId,
  activeTasksListId,
  activeTaskId,
  isCompleted,
}) => ({
  type: SET_TASK_STATUS,
  activeBoardId,
  activeTasksListId,
  activeTaskId,
  isCompleted,
});

export const dragHappenedAction = ({
  activeBoardId,
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  droppableId,
}) => ({
  type: DRAG_HAPPENED,
  activeBoardId,
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  droppableId,
});
