import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import './ActiveBoard.css';
import TaskList from './TaskList/TaskList';
import ListCreationButton from './ListCreation/ListCreationButton/ListCreationButton';
import ListCreationForm from './ListCreation/ListCreationForm/ListCreationForm';
import {
  setNewListAction,
  createNewListAction,
} from '../../actions/actionsCreators';

class ActiveBoard extends React.Component {
  showNewListData = ({ listName }) => {
    const {
      activeBoard: { boardId },
      props: { createNewList, setNewList },
    } = this;

    createNewList({
      activeBoardId: boardId,
      listData: {
        listName,
        listId: (
          Date.now().toString(36) +
          Math.random()
            .toString(36)
            .substr(2, 7)
        ).toUpperCase(),
        tasks: [],
      },
    });
    setNewList(false);
  };

  onDragEnd = () => {};

  render() {
    const {
      boardsList,
      newList,
      match: {
        params: { boardId },
      },
    } = this.props;

    this.activeBoard = boardsList.find((board) => board.boardId === boardId);

    const {
      showNewListData,
      activeBoard,
      onDragEnd,
      activeBoard: { boardName, data },
    } = this;

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board_container">
          <div className="board_container_board_name">{boardName}</div>
          <div className="board_container_tasks">
            {data &&
              data.map(({ listName, listId }) => (
                <TaskList
                  listId={listId}
                  key={listId}
                  listName={listName}
                  activeBoard={activeBoard}
                />
              ))}
            {newList ? (
              <ListCreationForm onSubmit={showNewListData} />
            ) : (
              <ListCreationButton />
            )}
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setNewList: (status) => dispatch(setNewListAction(status)),
  createNewList: (listData) => dispatch(createNewListAction(listData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveBoard);

ActiveBoard.propTypes = {
  setNewList: PropTypes.func.isRequired,
  createNewList: PropTypes.func.isRequired,
  newList: PropTypes.bool.isRequired,
  boardsList: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};
