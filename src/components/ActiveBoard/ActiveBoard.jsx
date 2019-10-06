import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import './ActiveBoard.css';
import TaskList from './TaskList/TaskList';
import ListCreationButton from './ListCreation/ListCreationButton/ListCreationButton';
import ListCreationForm from './ListCreation/ListCreationForm/ListCreationForm';
import { setNewListAction } from '../../actions/actionsCreators';

class ActiveBoard extends React.Component {
  showNewTaskData = (value) => {
    const { clearForm } = this.props;

    console.log(value);
    clearForm('createNewTask');
  };

  showNewListData = (value) => {
    const { setNewList } = this.props;

    console.log(value);
    setNewList(false);
  };

  render() {
    const {
      showNewTaskData,
      showNewListData,
      props: {
        newList,
        boardsList,
        match: {
          params: { id },
        },
      },
    } = this;

    const activeBoard = boardsList.find((board) => board.id === id);
    const { boardName } = activeBoard;

    return (
      <div className="board_container">
        <div className="board_container_board_name">{boardName}</div>
        <div className="board_container_tasks">
          <TaskList form={`form:${id}`} onSubmit={showNewTaskData} />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveBoard);

ActiveBoard.propTypes = {
  clearForm: PropTypes.func.isRequired,
  setNewList: PropTypes.func.isRequired,
  newList: PropTypes.bool.isRequired,
  boardsList: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};
