export const updateUserName = (username) => {
  return {
    type: "UPDATE_USER_NAME",
    username,
  };
};

export const updateDisplayName = (displayName) => {
  return {
    type: "UPDATE_DISPLAY_NAME",
    displayName,
  };
};

export const updateAvatar = (avatar) => {
  return {
    type: "UPDATE_AVATAR",
    avatar,
  };
};

export const updateEmail = (email) => {
  return {
    type: "UPDATE_EMAIL",
    email,
  };
};

export const updateId = (id) => {
  return {
    type: "UPDATE_ID",
    id,
  };
};

export const updateVersion = (version) => {
  return {
    type: "UPDATE_VERSION",
    version,
  };
};

export const updatePinnedBusinesses = (pinnedBusinesses) => {
  return {
    type: "UPDATE_PINNED_BUSINESSES",
    pinnedBusinesses,
  };
};

export const updateActiveApplications = (activeApplications) => {
  return {
    type: "UPDATE_ACTIVE_APPLICATIONS",
    activeApplications,
  };
};

export const updateCheckedIndustries = (checkedIndustries) => {
  return {
    type: "UPDATE_CHECKED_INDUSTRIES",
    checkedIndustries,
  };
};

export const updateDisabledIndustries = (disabledIndustries) => {
  return {
    type: "UPDATE_DISABLED_INDUSTRIES",
    disabledIndustries,
  };
};

export const updateCompletionState = (page, completionPercentage) => {
  return {
    type: "UPDATE_COMPLETION_STATE",
    page,
    completionPercentage,
  };
};

export const batchUpdateCompletionState = (completionState) => {
  return {
    type: "BATCH_UPDATE_COMPLETION_STATE",
    completionState,
  };
};

export const updateCompletionChecklist = (page, completionChecklist) => {
  return {
    type: "UPDATE_COMPLETION_CHECKLIST",
    page,
    completionChecklist,
  };
};

export const batchUpdateCompletionChecklist = (completionChecklist) => {
  return {
    type: "BATCH_UPDATE_COMPLETION_CHECKLIST",
    completionChecklist,
  };
};

export const finishTutorial = (tutorialStatus) => {
  return {
    type: "FINISH_TUTORIAL",
    tutorialStatus,
  };
};

export const restartTutorial = (tutorialStatus) => {
  return {
    type: "RESTART_TUTORIAL",
    tutorialStatus,
  };
};

export const startLoading = (loadingStatus) => {
  return {
    type: "START_LOADING",
    loadingStatus,
  }
}

export const finishLoading = (loadingStatus) => {
  return {
    type: "FINISH_LOADING",
    loadingStatus,
  }
}
