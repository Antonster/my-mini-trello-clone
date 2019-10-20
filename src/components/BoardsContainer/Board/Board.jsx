import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Board.css';

const Board = ({ boardName, boardId }) => {
  return (
    <Link to={`/${boardId}`} id={boardId} className="content_board_button">
      {boardName}
    </Link>
  );
};

export default Board;

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
};
