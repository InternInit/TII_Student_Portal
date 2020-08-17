const userInfoReducer = (state = {username:"",avatar:"",email:"", version:0, pinnedBusinesses:[], activeApplications:[]}, action) => {
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
    case 'UPDATE_PINNED_BUSINESSES':
      return Object.assign({}, state, {
        pinnedBusinesses : action.pinnedBusinesses
      })
    case 'UPDATE_ACTIVE_APPLICATIONS':
      return Object.assign({}, state, {
        activeApplications : action.activeApplications
      })
    default:
      return state
  }
}

export default userInfoReducer
