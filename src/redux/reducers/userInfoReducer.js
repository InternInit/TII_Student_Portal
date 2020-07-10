const userInfoReducer = (state = {Name:"",Avatar:""}, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      state.Name = action.name
      return state
    case 'UPDATE_AVATAR':
      state.Avatar = action.avater
      return state
    default:
      return state
  }
}

export default userInfoReducer
