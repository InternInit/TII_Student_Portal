const userInfoReducer = (
  state = {
    username: "",
    displayName: "",
    avatar: "",
    email: "",
    id: "",
    version: 0,
    pinnedBusinesses: [],
    activeApplications: [],
    checkedIndustries: [],
    disabledIndustries: [],
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_USER_NAME":
      return Object.assign({}, state, {
        username: action.username,
      });
    case "UPDATE_DISPLAY_NAME":
      return Object.assign({}, state, {
        displayName: action.displayName,
      });
    case "UPDATE_AVATAR":
      return Object.assign({}, state, {
        avatar: action.avatar,
      });
    case "UPDATE_EMAIL":
      return Object.assign({}, state, {
        email: action.email,
      });
    case "UPDATE_ID":
      return Object.assign({}, state, {
        id: action.id,
      });
    case "UPDATE_VERSION":
      return Object.assign({}, state, {
        version: action.version,
      });
    case "UPDATE_PINNED_BUSINESSES":
      return Object.assign({}, state, {
        pinnedBusinesses: action.pinnedBusinesses,
      });
    case "UPDATE_ACTIVE_APPLICATIONS":
      return Object.assign({}, state, {
        activeApplications: action.activeApplications,
      });
    case "UPDATE_CHECKED_INDUSTRIES":
      return Object.assign({}, state, {
        checkedIndustries: action.checkedIndustries,
      });
    case "UPDATE_DISABLED_INDUSTRIES":
      return Object.assign({}, state, {
        disabledIndustries: action.disabledIndustries,
      });
    case "REMOVE_PINNED_BUSINESS":
      return {
        ...state,
        pinnedBusinesses: state.pinnedBusinesses.filter(
          (business) => business.Id !== action.businessId
        ),
      };
    case "ADD_PINNED_BUSINESS":
      return {
        ...state,
        pinnedBusinesses: [...pinnedBusiness, action.newPinnedBusiness],
      };
    case "REMOVE_ACTIVE_APP":
      return {
        ...state,
        activeApplications: state.activeApplications.filter(
          (business) => business.Id !== action.businessId
        ),
      };
    case "ADD_ACTIVE_APP":
      return {
        ...state,
        activeApplications: [...activeApplications, action.newActiveApp],
      };
    default:
      return state;
  }
};

export default userInfoReducer;
