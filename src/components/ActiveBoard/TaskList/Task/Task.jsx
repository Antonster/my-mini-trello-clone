import * as React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const { taskId, taskName, isCompleted, newTaskStatus } = props;

  return (
    <div
      id={taskId}
      className={
        isCompleted
          ? 'board_container_task_list_task completed'
          : 'board_container_task_list_task'
      }
    >
      <div className="board_container_task_list_task_name">{taskName}</div>
      <button
        id={`button:${taskId}`}
        className="board_container_task_list_task_button"
        type="button"
        onClick={newTaskStatus}
      >
        ✓
      </button>
    </div>
  );
};

export default Task;

Task.propTypes = {
  newTaskStatus: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
