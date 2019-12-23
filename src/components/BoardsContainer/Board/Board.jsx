import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(Link)`
  text-align: center;
  word-break: break-word;
  width: calc(33.3% - 20px);
  margin: 10px;
  padding: 55px 20px;
  border-radius: 5px;
  background-color: white;
  color: #333;
  font-size: 1.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 1024px) {
    width: calc(50% - 20px);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Board = ({ boardName, boardId }) => {
  return (
    <NavItem to={`/board/${boardId}`} id={boardId}>
      {boardName}
    </NavItem>
  );
};

export default Board;

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
};
