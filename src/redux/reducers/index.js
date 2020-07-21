import userInfoReducer from "./userInfoReducer";
import completionStateReducer from "./completionStateReducer";
import completionChecklistReducer from "./completionChecklistReducer";
import tutorialReducer from "./tutorialReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  completionState: completionStateReducer,
  completionChecklist: completionChecklistReducer,
  tutorialStatus: tutorialReducer
});

export default rootReducer;
