const completionChecklistReducer = (state = [[],[],[],[]], action) => {
  switch (action.type) {
    case 'UPDATE_COMPLETION_CHECKLIST':
      state[action.page] = action.completionChecklist
      return state
    case 'BATCH_UPDATE_COMPLETION_CHECKLIST':
      return action.completionChecklist
    default:
      return state
  }
}

export default completionChecklistReducer
