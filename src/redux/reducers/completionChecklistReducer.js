const completionChecklistReducer = (state = [[],[],[],[]], action) => {
  switch (action.type) {
    case 'UPDATE_COMPLETION_CHECKLIST':
      state[action.page] = action.completionChecklist
      return state
    default:
      return state
  }
}

export default completionChecklistReducer
