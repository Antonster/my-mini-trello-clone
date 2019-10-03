import * as React from 'react';

import './Task.css';

const Task = () => {
  return (
    <div className="board_container_task_list_task">
      <div className="board_container_task_list_task_name">Task</div>
      <button className="board_container_task_list_task_button" type="button">
        ✓
      </button>
    </div>
  );
};

export default Task;
