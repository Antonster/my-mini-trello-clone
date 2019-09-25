import { NEW_BOARD } from '../constants';

export const setNewBoardAction = (status) => ({
  type: NEW_BOARD,
  status,
});
