import * as React from 'react';
import PropTypes from 'prop-types';

import './Board.css';

const Board = ({ boardName, id }) => {
  return (
    <button
      className="content_board_button"
      type="button"
      area-label="board"
      id={id}
    >
      {boardName}
    </button>
  );
};

export default Board;

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
