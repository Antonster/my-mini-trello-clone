import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './ListCreationButton.css';
import { setNewListAction } from '../../../../actions/actionsCreators';

const ListCreationButton = (props) => {
  const { setNewList } = props;

  return (
    <button
      className="board_container_tasks_new_list_button"
      type="button"
      onClick={() => setNewList(true)}
    >
      Create a new list...
    </button>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setNewList: (status) => dispatch(setNewListAction(status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCreationButton);

ListCreationButton.propTypes = {
  setNewList: PropTypes.func.isRequired,
};
