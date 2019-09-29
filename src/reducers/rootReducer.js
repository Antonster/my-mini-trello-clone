import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import newBoard from './newBoard';
import boardsList from './boardsList';

export default combineReducers({ newBoard, boardsList, form: formReducer });
