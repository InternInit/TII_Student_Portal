const tutorialReducer = (state = true, action) => {
  switch (action.type) {
    case "FINISH_TUTORIAL":
      return true;
    case "RESTART_TUTORIAL":
      return false;
    default:
      return state;
  }
};

export default tutorialReducer;
