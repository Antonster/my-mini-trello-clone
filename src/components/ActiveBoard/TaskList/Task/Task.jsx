import * as React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const { id, taskName, isComplete } = props;

  return (
    <div
      id={id}
      className={
        isComplete
          ? 'board_container_task_list_task completed'
          : 'board_container_task_list_task'
      }
    >
      <div className="board_container_task_list_task_name">{taskName}</div>
      <button className="board_container_task_list_task_button" type="button">
        ✓
      </button>
    </div>
  );
};

export default Task;

Task.propTypes = {
  id: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};
