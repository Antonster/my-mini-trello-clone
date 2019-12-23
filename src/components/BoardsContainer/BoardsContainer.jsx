import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Board from './Board/Board';
import BoardCreationButton from './BoardCreation/BoardCreationButton';
import BoardCreationForm from './BoardCreation/BoardCreationForm';
import {
  setNewBoardAction,
  getBoardsListAction,
} from '../../actions/actionsCreators';

const BoardsContainerBlock = styled.div`
  height: calc(100vh - 65px);
  overflow: auto;
  padding: 5%;
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

  render() {
    const {
      showResults,
      props: { newBoard, boardsList },
    } = this;

    return (
      <BoardsContainerBlock>
        {boardsList &&
          boardsList.map(({ boardName, boardId }) => (
            <Board boardName={boardName} boardId={boardId} key={boardId} />
          ))}
        {newBoard ? (
          <BoardCreationForm onSubmit={showResults} />
        ) : (
          <BoardCreationButton />
        )}
      </BoardsContainerBlock>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setNewBoard: (status) => dispatch(setNewBoardAction(status)),
  getBoardsList: (boardData) => dispatch(getBoardsListAction(boardData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsContainer);

BoardsContainer.propTypes = {
  boardsList: PropTypes.array.isRequired,
  setNewBoard: PropTypes.func.isRequired,
  getBoardsList: PropTypes.func.isRequired,
  newBoard: PropTypes.bool.isRequired,
};
