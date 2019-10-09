import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import './TaskList.css';
import Task from './Task/Task';
import TaskCreationForm from './TaskCreationForm/TaskCreationForm';
import { createNewTaskAction } from '../../../actions/actionsCreators';

class TaskList extends React.Component {
  showNewTaskData = (value) => {
    const {
      ListId,
      createNewTask,
      activeBoardIndex,
      activeBoard: { data },
    } = this.props;
    const { taskName } = value;
    const activeListIndex = data.findIndex((list) => list.id === ListId);

    createNewTask({
      activeBoardIndex,
      activeListIndex,
      taskName,
      id: (
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 7)
      ).toUpperCase(),
      isComplete: false,
    });
  };

  render() {
    const {
      showNewTaskData,
      props: {
        listName,
        ListId,
        activeBoard: { data },
      },
    } = this;
    const activeListTasks = data.find((list) => list.id === ListId).tasks;
    return (
      <div id={ListId} className="board_container_tasks_task_list">
        <div className="board_container_tasks_task_list_title">{listName}</div>
        <hr className="board_container_tasks_task_list_separator" />
        <TaskCreationForm onSubmit={showNewTaskData} form={`form:${ListId}`} />
        {activeListTasks &&
          activeListTasks.map(({ taskName, id, isComplete }) => (
            <Task
              id={id}
              key={id}
              taskName={taskName}
              isComplete={isComplete}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

TaskList.propTypes = {
  listName: PropTypes.string.isRequired,
  ListId: PropTypes.string.isRequired,
  createNewTask: PropTypes.func.isRequired,
  activeBoardIndex: PropTypes.number.isRequired,
  activeBoard: PropTypes.object.isRequired,
};
