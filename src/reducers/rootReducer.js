import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import newBoard from './newBoard';
import newList from './newList';
import boardsList from './boardsList';

export default combineReducers({
  newBoard,
  newList,
  boardsList,
  form: formReducer,
});
