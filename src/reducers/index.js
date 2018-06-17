import { combineReducers } from 'redux';
import vacationReducer from './vacationReducer';

export default combineReducers({
  vacation: vacationReducer
});
