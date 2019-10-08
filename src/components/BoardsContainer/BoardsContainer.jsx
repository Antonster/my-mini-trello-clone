import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './BoardsContainer.css';
import Board from './Board/Board';
import BoardCreationButton from './BoardCreation/BoardCreationButton/BoardCreationButton';
import BoardCreationForm from './BoardCreation/BoardCreationForm/BoardCreationForm';
import {
  setNewBoardAction,
  getBoardsListAction,
} from '../../actions/actionsCreators';

class BoardsContainer extends React.Component {
  showResults = (value) => {
    const { setNewBoard, getBoardsList } = this.props;
    const { boardName } = value;

    const boardData = {
      boardName,
      id: (
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 5)
      ).toUpperCase(),
      data: [],
    };

    if (!localStorage.getItem('boardsList')) {
      localStorage.setItem('boardsList', JSON.stringify([boardData]));
    } else {
      const localData = JSON.parse(localStorage.getItem('boardsList'));

      localStorage.setItem(
        'boardsList',
        JSON.stringify([...localData, boardData])
      );
    }

    getBoardsList(boardData);
    setNewBoard(false);
  };

  render() {
    const {
      showResults,
      props: { newBoard, boardsList },
    } = this;

    return (
      <div className="boards_container">
        {boardsList &&
          boardsList.map(({ boardName, id }) => (
            <Board boardName={boardName} id={id} key={id} />
          ))}
        {newBoard ? (
          <BoardCreationForm onSubmit={showResults} />
        ) : (
          <BoardCreationButton />
        )}
      </div>
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
