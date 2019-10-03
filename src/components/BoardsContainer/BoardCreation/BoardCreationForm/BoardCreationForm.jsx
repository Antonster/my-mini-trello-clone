import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import './BoardCreationForm.css';
import renderInput from '../../../../forms/formElements/input';
import { setNewBoardAction } from '../../../../actions/actionsCreators';
import {
  requiredName,
  emptyName,
} from '../../../../forms/formValidators/formValidators';

const BoardCreationForm = (props) => {
  const { setNewBoard, handleSubmit } = props;

  return (
    <form
      onSubmit={handleSubmit}
      className="boards_container_new_board_button_active"
    >
      <div className="boards_container_new_board_header">
        <div>Creating a board</div>
        <button
          className="boards_container_new_board_cross"
          type="button"
          aria-label="new-board-cross"
          onClick={() => setNewBoard(false)}
        />
      </div>
      <div className="boards_container_new_board_main">
        <div className="boards_container_new_board_main_title">
          What shall we call the board?
        </div>
        <Field
          className="boards_container_new_board_main_input"
          errorClassName="boards_container_new_board_main_input_error"
          name="boardName"
          component={renderInput}
          type="text"
          validate={[requiredName, emptyName]}
        />
        <div className="boards_container_new_board_button_container">
          <button
            className="boards_container_new_board_main_cancel_button"
            type="button"
            onClick={() => setNewBoard(false)}
          >
            CANCEL
          </button>
          <button
            className="boards_container_new_board_main_create_button"
            type="submit"
          >
            CREATE
          </button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setNewBoard: (status) => dispatch(setNewBoardAction(status)),
});

const decoratedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCreationForm);

export default reduxForm({
  form: 'createNewBoard',
})(decoratedComponent);

BoardCreationForm.propTypes = {
  setNewBoard: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
