import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import './TaskList.css';
import Task from './Task/Task';
import TaskCreationForm from './TaskCreationForm/TaskCreationForm';
import {
  createNewTaskAction,
  setTaskStatusAction,
} from '../../../actions/actionsCreators';

class TaskList extends React.Component {
  showNewTaskData = ({ taskName }) => {
    const {
      activeTasksList: { listId },
      props: {
        createNewTask,
        activeBoard: { boardId },
      },
    } = this;

    createNewTask({
      activeBoardId: boardId,
      activeTasksListId: listId,
      taskData: {
        taskName,
        taskId: (
          Date.now().toString(36) +
          Math.random()
            .toString(36)
            .substr(2, 7)
        ).toUpperCase(),
        isCompleted: false,
      },
    });
  };

  newTaskStatus = (event) => {
    const { id } = event.target;
    const {
      activeTasksList: { listId, tasks },
      props: {
        activeBoard: { boardId },
        setTaskStatus,
      },
    } = this;
    const activeTaskStatus = tasks.find(
      (task) => task.taskId === id.substring(7)
    ).isCompleted;
    const data = {
      activeBoardId: boardId,
      activeTasksListId: listId,
      activeTaskId: id.substring(7),
    };

    if (activeTaskStatus) {
      setTaskStatus({
        ...data,
        isCompleted: false,
      });
    } else {
      setTaskStatus({
        ...data,
        isCompleted: true,
      });
    }
  };

  render() {
    const {
      listName,
      clearForm,
      listId,
      activeBoard: { data },
    } = this.props;

    this.activeTasksList = data.find((list) => list.listId === listId);

    const {
      showNewTaskData,
      newTaskStatus,
      activeTasksList: { tasks },
    } = this;

    return (
      <div id={listId} className="board_container_tasks_task_list">
        <div className="board_container_tasks_task_list_title">{listName}</div>
        <hr className="board_container_tasks_task_list_separator" />
        <TaskCreationForm
          onSubmit={(value) => {
            showNewTaskData(value);
            clearForm(`form:${listId}`);
          }}
          form={`form:${listId}`}
        />
        {tasks &&
          tasks.map(({ taskName, taskId, isCompleted }) => (
            <Task
              taskId={taskId}
              key={taskId}
              taskName={taskName}
              isCompleted={isCompleted}
              newTaskStatus={newTaskStatus}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  clearForm: (formName) => dispatch(reset(formName)),
  createNewTask: (newTaskData) => dispatch(createNewTaskAction(newTaskData)),
  setTaskStatus: (status) => dispatch(setTaskStatusAction(status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

TaskList.propTypes = {
  listName: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  activeBoard: PropTypes.object.isRequired,
  createNewTask: PropTypes.func.isRequired,
  setTaskStatus: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
};
