import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './BoardCreationButton.css';
import { setNewBoardAction } from '../../../../actions/actionsCreators';

const BoardCreationButton = (props) => {
  const { setNewBoard } = props;

  return (
    <button
      className="boards_container_new_board_button"
      type="button"
      onClick={() => setNewBoard(true)}
    >
      Create a new board...
    </button>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setNewBoard: (status) => dispatch(setNewBoardAction(status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCreationButton);

BoardCreationButton.propTypes = {
  setNewBoard: PropTypes.func.isRequired,
};