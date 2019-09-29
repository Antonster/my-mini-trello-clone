import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../../store';

import CreationButton from './CreationButton/CreationButton';
import CreationForm from './CreationForm/CreationForm';
import {
  setNewBoardAction,
  getBoardsListAction,
} from '../../../actions/actionsCreators';

class BoardCreation extends React.Component {
  showResults = (value) => {
    const { setNewBoard, getBoardsList } = this.props;
    const { boardName } = value;

    const boardData = {
      boardName,
      id: (
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 9)
      ).toUpperCase(),
      data: {},
    };
    getBoardsList(boardData);
    setNewBoard(false);
    console.log(store.getState());
  };

  render() {
    const {
      showResults,
      props: { newBoard },
    } = this;

    return newBoard ? (
      <CreationForm onSubmit={showResults} />
    ) : (
      <CreationButton />
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
)(BoardCreation);

BoardCreation.propTypes = {
  setNewBoard: PropTypes.func.isRequired,
  getBoardsList: PropTypes.func.isRequired,
  newBoard: PropTypes.bool.isRequired,
};
