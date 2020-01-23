import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Board from './Board/Board';
import BoardCreationButton from './BoardCreation/BoardCreationButton';
import BoardCreationForm from './BoardCreation/BoardCreationForm';
import {
  setNewBoardAction,
  removeBoardAction,
  getBoardsListAction,
} from '../../actions/actionsCreators';

const BoardsContainerBlock = styled.div`
  height: calc(100vh - 65px);
  overflow: auto;
  padding: 5%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

class BoardsContainer extends React.Component {
  showResults = ({ boardName }) => {
    const { setNewBoard, getBoardsList } = this.props;

    getBoardsList({
      boardName,
      boardId: (
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 5)
      ).toUpperCase(),
      data: [],
    });
    setNewBoard(false);
  };

  onDeleteBoardCLick = (event) => {
    const { id } = event.target;
    const { removeBoard } = this.props;

    removeBoard({
      activeBoardId: id.substring(7),
    });
  };

  render() {
    const {
      showResults,
      onDeleteBoardCLick,
      props: { newBoard, boardsList },
    } = this;

    return (
      <BoardsContainerBlock>
        <InnerContainer>
          {boardsList &&
            boardsList.map(({ boardName, boardId }) => (
              <Board
                boardName={boardName}
                onDeleteBoardCLick={onDeleteBoardCLick}
                boardId={boardId}
                key={boardId}
              />
            ))}
          {newBoard ? (
            <BoardCreationForm onSubmit={showResults} />
          ) : (
            <BoardCreationButton />
          )}
        </InnerContainer>
      </BoardsContainerBlock>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setNewBoard: (status) => dispatch(setNewBoardAction(status)),
  removeBoard: (data) => dispatch(removeBoardAction(data)),
  getBoardsList: (boardData) => dispatch(getBoardsListAction(boardData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardsContainer);

BoardsContainer.propTypes = {
  boardsList: PropTypes.array.isRequired,
  setNewBoard: PropTypes.func.isRequired,
  removeBoard: PropTypes.func.isRequired,
  getBoardsList: PropTypes.func.isRequired,
  newBoard: PropTypes.bool.isRequired,
};
