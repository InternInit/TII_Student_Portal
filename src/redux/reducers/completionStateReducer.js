const completionStateReducer = (state = [0,0,0,0], action) => {
  switch (action.type) {
    case 'UPDATE_COMPLETION_STATE':
      state[action.page] = action.completionPercentage
      return state
    case 'BATCH_UPDATE_COMPLETION_STATE':
      return action.completionState
    default:
      return state
  }
}

export default completionStateReducer
