import {
  CREATE_NEW_BOARD,
  CREATE_NEW_LIST,
  CREATE_NEW_TASK,
  SET_TASK_STATUS,
} from '../constants';

const initialState = JSON.parse(localStorage.getItem('boardsList')) || [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_BOARD: {
      const { boardData } = action;

      return [...state, boardData];
    }
    case CREATE_NEW_LIST: {
      const { activeBoardId, listData } = action;

      return state.map((board) => {
        if (board.boardId === activeBoardId) {
          return {
            ...board,
            data: [...board.data, listData],
          };
        }
        return board;
      });
    }
    case CREATE_NEW_TASK: {
      const { activeBoardId, activeTasksListId, taskData } = action;

      return state.map((board) => {
        if (board.boardId === activeBoardId) {
          return {
            ...board,
            data: board.data.map((list) => {
              if (list.listId === activeTasksListId) {
                return {
                  ...list,
                  tasks: [...list.tasks, taskData],
                };
              }
              return list;
            }),
          };
        }
        return board;
      });
    }
    case SET_TASK_STATUS: {
      const {
        activeBoardId,
        activeTasksListId,
        activeTaskId,
        isCompleted,
      } = action;

      return state.map((board) => {
        if (board.boardId === activeBoardId) {
          return {
            ...board,
            data: board.data.map((list) => {
              if (list.listId === activeTasksListId) {
                return {
                  ...list,
                  tasks: list.tasks.map((task) => {
                    if (task.taskId === activeTaskId) {
                      return {
                        ...task,
                        isCompleted,
                      };
                    }
                    return task;
                  }),
                };
              }
              return list;
            }),
          };
        }
        return board;
      });
    }
    default:
      return state;
  }
};
