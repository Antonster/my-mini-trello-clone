import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import store from '../../store';

import './ActiveBoard.css';
import TaskList from './TaskList/TaskList';
import ListCreationButton from './ListCreation/ListCreationButton/ListCreationButton';
import ListCreationForm from './ListCreation/ListCreationForm/ListCreationForm';
import {
  setNewListAction,
  createNewListAction,
} from '../../actions/actionsCreators';

class ActiveBoard extends React.Component {
  constructor(props) {
    super(props);
    const {
      boardsList,
      match: {
        params: { id },
      },
    } = this.props;

    this.activeBoard = boardsList.find((board) => board.id === id);
  }

  showNewListData = (value) => {
    const {
      activeBoard: { id },
      props: { createNewList, setNewList },
    } = this;
    const { listName } = value;
    const localData = JSON.parse(localStorage.getItem('boardsList'));
    const listData = {
      listName,
      id: (
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 9)
      ).toUpperCase(),
      tasks: [],
    };

    createNewList({
      activeBoardId: id,
      ...listData,
    });
    setNewList(false);

    const boardIndex = localData.findIndex((board) => board.id === id);

    localData[boardIndex].data.push(listData);
    localStorage.setItem('boardsList', JSON.stringify([...localData]));
  };

  showNewTaskData = (value) => {
    const { clearForm } = this.props;

    console.log(value);
    clearForm('createNewTask');
  };

  render() {
    const {
      showNewTaskData,
      showNewListData,
      activeBoard: { boardName, data },
      props: { newList },
    } = this;

    return (
      <div className="board_container">
        <div className="board_container_board_name">{boardName}</div>
        <div className="board_container_tasks">
          {data &&
            data.map(({ listName, id }) => (
              <TaskList
                id={id}
                key={id}
                form={`form:${id}`}
                listName={listName}
                onSubmit={showNewTaskData}
              />
            ))}
          {newList ? (
            <ListCreationForm onSubmit={showNewListData} />
          ) : (
            <ListCreationButton />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  clearForm: (formName) => dispatch(reset(formName)),
  setNewList: (status) => dispatch(setNewListAction(status)),
  createNewList: (newListData) => dispatch(createNewListAction(newListData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveBoard);

ActiveBoard.propTypes = {
  clearForm: PropTypes.func.isRequired,
  setNewList: PropTypes.func.isRequired,
  createNewList: PropTypes.func.isRequired,
  newList: PropTypes.bool.isRequired,
  boardsList: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};
