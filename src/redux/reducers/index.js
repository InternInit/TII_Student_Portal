import userInfoReducer from './userInfoReducer';
import completionStateReducer from './completionStateReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userInfoReducer,
  completionStateReducer
})

export default rootReducer;
