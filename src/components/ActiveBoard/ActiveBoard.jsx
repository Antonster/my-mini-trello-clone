import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TaskList from './TaskList/TaskList';
import ListCreationButton from './ListCreation/ListCreationButton';
import ListCreationForm from './ListCreation/ListCreationForm';
import {
  setNewListAction,
  createNewListAction,
  dragHappenedAction,
} from '../../actions/actionsCreators';

const BoardContainer = styled.div`
  padding: 0 10%;
`;

const BoardName = styled.div`
  display: inline-block;
  padding: 20px 60px;
  margin: 20px 0;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  text-shadow: 0px 0px 3px #000;
  background-color: #9fe7a4;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ListsContainer = styled.div`
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

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

  onDragEnd = (result) => {
    const {
      activeBoard: { boardId },
      props: { dragHappened },
    } = this;
    const { destination, source, draggableId } = result;

    if (destination) {
      dragHappened({
        activeBoardId: boardId,
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
        droppableId: draggableId,
      });
    }
  };

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
        <BoardContainer>
          <BoardName>{boardName}</BoardName>
          <ListsContainer>
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
          </ListsContainer>
        </BoardContainer>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setNewList: (status) => dispatch(setNewListAction(status)),
  createNewList: (listData) => dispatch(createNewListAction(listData)),
  dragHappened: (data) => dispatch(dragHappenedAction(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveBoard);

ActiveBoard.propTypes = {
  setNewList: PropTypes.func.isRequired,
  createNewList: PropTypes.func.isRequired,
  dragHappened: PropTypes.func.isRequired,
  newList: PropTypes.bool.isRequired,
  boardsList: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};
