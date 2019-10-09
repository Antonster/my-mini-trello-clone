import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import newBoard from './newBoard';
import newList from './newList';
import boardsList from './boardsList';
import activeBoard from './activeBoard';

export default combineReducers({
  newBoard,
  newList,
  boardsList,
  activeBoard,
  form: formReducer,
});
