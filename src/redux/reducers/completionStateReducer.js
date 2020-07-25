const completionStateReducer = (state = [0,0,0,0], action) => {
  switch (action.type) {
    case 'UPDATE_COMPLETION_STATE':
      let newState = state.slice()
      newState[action.page] = action.completionPercentage
      return newState
    case 'BATCH_UPDATE_COMPLETION_STATE':
      return action.completionState
    default:
      return state
  }
}

export default completionStateReducer
