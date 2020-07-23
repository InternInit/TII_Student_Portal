const userInfoReducer = (state = {username:"",avatar:"",email:""}, action) => {
  switch (action.type) {
    case 'UPDATE_USER_NAME':
      state.username = action.username
      return state
    case 'UPDATE_AVATAR':
      state.avatar = action.avater
      return state
    case 'UPDATE_EMAIL':
      state.email = action.email
      return state
    default:
      return state
  }
}

export default userInfoReducer
