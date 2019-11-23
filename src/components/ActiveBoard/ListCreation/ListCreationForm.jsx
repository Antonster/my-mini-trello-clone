import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import ListCreationInput from './ListCreationInput';
import {
  requiredName,
  emptyName,
} from '../../../formValidators/formValidators';
import { setNewListAction } from '../../../actions/actionsCreators';
import crossImg from '../../../assets/cross.svg';

const ListForm = styled.form`
  position: relative;
  width: calc(33.3% - 20px);
  margin: 10px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ListFormTitle = styled.div`
  margin: 10px 10px 20px;
`;

const FormCancelButtom = styled.button`
  position: absolute;
  right: -8px;
  top: -8px;
  width: 24px;
  height: 24px;
  background: url(${crossImg}) no-repeat 50% 50% / cover;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(-15deg);
  }
`;

const ListCreationForm = (props) => {
  const { handleSubmit, setNewList } = props;

  return (
    <ListForm onSubmit={handleSubmit}>
      <ListFormTitle>Enter list name</ListFormTitle>
      <Field
        name="listName"
        type="text"
        component={ListCreationInput}
        validate={[requiredName, emptyName]}
      />
      <FormCancelButtom
        type="button"
        aria-label="cancel"
        onClick={() => setNewList(false)}
      />
    </ListForm>
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
