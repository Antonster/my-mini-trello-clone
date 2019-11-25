import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Task from './TaskCreation/Task';
import TaskCreationForm from './TaskCreation/TaskCreationForm';
import {
  createNewTaskAction,
  setTaskStatusAction,
} from '../../../actions/actionsCreators';

const TasksList = styled.div`
  width: calc(33.3% - 20px);
  margin: 10px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 200ms ease-in-out;
`;

const TasksListTitle = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const TasksListSeparator = styled.hr`
  height: 1px;
  width: 100%;
  margin: 2.5px 0 10px;
  opacity: 0.25;
`;

const TasksListInnerContainer = styled.div`
  width: 100%;
  min-height: 30px;
  background-color: ${(props) =>
    props.isDraggingOver ? 'rgba(247, 247, 116, 0.25)' : 'white'};
`;

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
      <TasksList>
        <TasksListTitle>{listName}</TasksListTitle>
        <TasksListSeparator />
        <TaskCreationForm
          onSubmit={(value) => {
            showNewTaskData(value);
            clearForm(`form:${listId}`);
          }}
          form={`form:${listId}`}
        />
        <Droppable droppableId={listId}>
          {(provided, snapshot) => (
            <TasksListInnerContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
              id={listId}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks &&
                tasks.map(({ taskName, taskId, isCompleted }, index) => (
                  <Task
                    taskId={taskId}
                    key={taskId}
                    taskName={taskName}
                    isCompleted={isCompleted}
                    newTaskStatus={newTaskStatus}
                    index={index}
                  />
                ))}
              {provided.placeholder}
            </TasksListInnerContainer>
          )}
        </Droppable>
      </TasksList>
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
