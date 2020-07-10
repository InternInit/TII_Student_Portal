import userInfoReducer from './userInfoReducer';
import completionStateReducer from './completionStateReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  completionState: completionStateReducer
})

export default rootReducer;
