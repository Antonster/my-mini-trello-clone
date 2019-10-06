import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import './ListCreationForm.css';
import renderInput from '../../../../forms/formElements/input';
import {
  requiredName,
  emptyName,
} from '../../../../forms/formValidators/formValidators';
import { setNewListAction } from '../../../../actions/actionsCreators';

const ListCreationForm = (props) => {
  const { handleSubmit, setNewList } = props;

  return (
    <form
      className="board_container_tasks_new_list_form"
      onSubmit={handleSubmit}
    >
      <div className="board_container_tasks_new_list_form_title">
        Enter list name
      </div>
      <Field
        className="board_container_tasks_new_list_form_input"
        errorClassName="board_container_tasks_new_list_form_input_error"
        name="listName"
        type="text"
        component={renderInput}
        validate={[requiredName, emptyName]}
      />
      <button
        className="board_container_tasks_new_list_form_cancel_button"
        type="button"
        aria-label="cancel"
        onClick={() => setNewList(false)}
      />
    </form>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setNewList: (status) => dispatch(setNewListAction(status)),
});

const decoratedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCreationForm);

export default reduxForm({
  form: 'listCreationForm',
})(decoratedComponent);

ListCreationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setNewList: PropTypes.func.isRequired,
};
