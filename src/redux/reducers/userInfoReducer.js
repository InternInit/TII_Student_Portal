const userInfoReducer = (state = {username:"",avatar:"",email:"", version:0}, action) => {
  switch (action.type) {
    case 'UPDATE_USER_NAME':
      return Object.assign({}, state, {
        username: action.username
      })
    case 'UPDATE_AVATAR':
      return Object.assign({}, state, {
        avatar: action.avatar
      })
    case 'UPDATE_EMAIL':
      return Object.assign({}, state, {
        email: action.email
      })
    case 'UPDATE_VERSION':
      return Object.assign({}, state, {
        version: action.version
      })
    default:
      return state
  }
}

export default userInfoReducer
