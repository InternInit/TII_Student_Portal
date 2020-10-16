import userInfoReducer from "./userInfoReducer";
import completionStateReducer from "./completionStateReducer";
import completionChecklistReducer from "./completionChecklistReducer";
import tutorialReducer from "./tutorialReducer";
import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  finishedLoading: loadingReducer,
  userInfo: userInfoReducer,
  completionState: completionStateReducer,
  completionChecklist: completionChecklistReducer,
  tutorialStatus: tutorialReducer
});

export default rootReducer;
