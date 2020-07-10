export const updateName = name => {
  return {
    type:'UPDATE_NAME',
    name
  }
}

export const updateAvatar = avatar => {
  return {
    type:'UPDATE_AVATAR',
    avatar
  }
}

export const updateCompletionState = (page, completionPercentage) => {
  return {
    type:'UPDATE_COMPLETION_STATE',
    page,
    completionPercentage
  }
}
