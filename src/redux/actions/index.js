export const updateUserName = username => {
  return {
    type: "UPDATE_USER_NAME",
    username
  };
};

export const updateAvatar = avatar => {
  return {
    type: "UPDATE_AVATAR",
    avatar
  };
};

export const updateEmail = email => {
  return {
    type: "UPDATE_EMAIL",
    email
  };
};

export const updateCompletionState = (page, completionPercentage) => {
  return {
    type: "UPDATE_COMPLETION_STATE",
    page,
    completionPercentage
  };
};

export const batchUpdateCompletionState = completionState => {
  return {
    type: "BATCH_UPDATE_COMPLETION_STATE",
    completionState
  };
};

export const updateCompletionChecklist = (page, completionChecklist) => {
  return {
    type: "UPDATE_COMPLETION_CHECKLIST",
    page,
    completionChecklist
  };
};

export const batchUpdateCompletionChecklist = completionChecklist => {
  return {
    type: "BATCH_UPDATE_COMPLETION_CHECKLIST",
    completionChecklist
  };
};

export const finishTutorial = tutorialStatus => {
  return {
    type: "FINISH_TUTORIAL",
    tutorialStatus
  };
};

export const restartTutorial = tutorialStatus => {
  return {
    type: "RESTART_TUTORIAL",
    tutorialStatus
  };
};
