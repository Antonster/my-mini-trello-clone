import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './ActiveBoard.css';
import TaskList from './TaskList/TaskList';
import ListCreationButton from './ListCreation/ListCreationButton/ListCreationButton';
import ListCreationForm from './ListCreation/ListCreationForm/ListCreationForm';
import {
  setNewListAction,
  createNewListAction,
  setActiveBoardAction,
} from '../../actions/actionsCreators';

class ActiveBoard extends React.Component {
  componentDidMount() {
    const {
      setActiveBoard,
      boardsList,
      match: {
        params: { id },
      },
    } = this.props;

    const activeBoard = boardsList.find((board) => board.id === id);
    const activeBoardIndex = boardsList.findIndex((board) => board.id === id);

    setActiveBoard({ ...activeBoard, index: activeBoardIndex });
  }

  showNewListData = (value) => {
    const {
      createNewList,
      setNewList,
      activeBoard: { index },
    } = this.props;
    const { listName } = value;

    createNewList({
      activeBoardIndex: index,
      listName,
      id: (
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 7)
      ).toUpperCase(),
      tasks: [],
    });
    setNewList(false);
  };

  render() {
    const {
      showNewListData,
      props: {
        newList,
        activeBoard: { boardName, data, index },
      },
    } = this;

    return (
      <div className="board_container">
        <div className="board_container_board_name">{boardName}</div>
        <div className="board_container_tasks">
          {data &&
            data.map(({ listName, id }) => (
              <TaskList
                ListId={id}
                key={id}
                listName={listName}
                activeBoardIndex={index}
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
  setActiveBoard: (boardData) => dispatch(setActiveBoardAction(boardData)),
  setNewList: (status) => dispatch(setNewListAction(status)),
  createNewList: (newListData) => dispatch(createNewListAction(newListData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveBoard);

ActiveBoard.propTypes = {
  setActiveBoard: PropTypes.func.isRequired,
  setNewList: PropTypes.func.isRequired,
  createNewList: PropTypes.func.isRequired,
  newList: PropTypes.bool.isRequired,
  boardsList: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  activeBoard: PropTypes.object.isRequired,
};
