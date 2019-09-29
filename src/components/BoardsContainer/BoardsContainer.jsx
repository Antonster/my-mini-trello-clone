import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './BoardsContainer.css';
import BoardCreation from './BoardCreation/BoardCreation';
import Board from './Board/Board';

class BoardsContainer extends React.Component {
  innerContent = () => {};

  render() {
    const { boardsList } = this.props;

    return (
      <div className="boards_container">
        {boardsList &&
          boardsList.map(({ boardName, id }) => (
            <Board boardName={boardName} id={id} key={id} />
          ))}
        <BoardCreation />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(BoardsContainer);

BoardsContainer.propTypes = {
  boardsList: PropTypes.array.isRequired,
};
