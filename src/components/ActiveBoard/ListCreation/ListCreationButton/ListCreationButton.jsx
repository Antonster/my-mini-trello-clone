import * as React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import './ListCreationButton.css';
// import { setNewBoardAction } from '../../../../actions/actionsCreators';

const ListCreationButton = () => {
  // const { setNewBoard } = props;

  return (
    <button
      className="board_container_new_list_button"
      type="button"
      // onClick={() => setNewBoard(true)}
    >
      Create a new list...
    </button>
  );
};

export default ListCreationButton;

// const mapStateToProps = (state) => state;

// const mapDispatchToProps = (dispatch) => ({
//   setNewBoard: (status) => dispatch(setNewBoardAction(status)),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ListCreationButton);

// ListCreationButton.propTypes = {
//   setNewBoard: PropTypes.func.isRequired,
// };
