import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Content.css';
import { setNewBoardAction } from '../../actions/actionsCreators';
import NewBoard from '../NewBoard/NewBoard';
import Board from '../Board/Board';

class Content extends React.Component {
  innerContent = () => {};

  getNewBoardStatus = (status) => {
    const { setNewBoard } = this.props;

    setNewBoard(status);
  };

  render() {
    const { getNewBoardStatus } = this;
    return (
      <div className="content">
        <Board />
        <Board />
        <Board />
        <Board />
        <NewBoard getNewBoardStatus={getNewBoardStatus} />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setNewBoard: (status) => dispatch(setNewBoardAction(status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

Content.propTypes = {
  setNewBoard: PropTypes.func,
};

Content.defaultProps = {
  setNewBoard: () => {},
};
