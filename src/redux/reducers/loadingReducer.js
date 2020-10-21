const loadingReducer = (state = false, action) => {
    switch (action.type) {
      case "FINISH_LOADING":
        return true;
      case "START_LOADING":
        return false;
      default:
        return state;
    }
  };
  
  export default loadingReducer;
  