const completionStateReducer = (state = [0,0,0,0], action) => {
  switch (action.type) {
    case 'UPDATE_COMPLETION_STATE':
      state[action.page] = action.completionPercentage
      return state
    default:
      return state
  }
}

export default completionStateReducer
