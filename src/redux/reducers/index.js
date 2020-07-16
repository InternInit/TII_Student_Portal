import userInfoReducer from './userInfoReducer';
import completionStateReducer from './completionStateReducer';
import completionChecklistReducer from './completionChecklistReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  completionState: completionStateReducer,
  completionChecklist: completionChecklistReducer
})

export default rootReducer;
