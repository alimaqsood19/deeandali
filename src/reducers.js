import { combineReducers } from 'redux';
import userReducer from './guest/reducer';

export default combineReducers({
  user: userReducer
});
