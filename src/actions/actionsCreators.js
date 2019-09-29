import { NEW_BOARD, GET_BOARD_LIST } from '../constants';

export const setNewBoardAction = (status) => ({
  type: NEW_BOARD,
  status,
});

export const getBoardsListAction = ({ boardName, id, data }) => ({
  type: GET_BOARD_LIST,
  boardName,
  id,
  data,
});
