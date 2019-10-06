import { NEW_BOARD, NEW_LIST, GET_BOARD_LIST } from '../constants';

export const setNewBoardAction = (status) => ({
  type: NEW_BOARD,
  status,
});

export const setNewListAction = (status) => ({
  type: NEW_LIST,
  status,
});

export const getBoardsListAction = ({ boardName, id, data }) => ({
  type: GET_BOARD_LIST,
  boardName,
  id,
  data,
});
