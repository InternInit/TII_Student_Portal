const userInfoReducer = (state = {name:"",avatar:""}, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      state.name = action.name
      return state
    case 'UPDATE_AVATAR':
      state.avatar = action.avater
      return state
    default:
      return state
  }
}

export default userInfoReducer
