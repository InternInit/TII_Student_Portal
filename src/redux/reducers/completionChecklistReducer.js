const defaultState = [
  [
    { key: "First Name", completed: false },
    { key: "Last Name", completed: false },
    { key: "Phone Number", completed: false },
    { key: "Email", completed: false },
    { key: "Address", completed: false },
    { key: "City", completed: false },
    { key: "State", completed: false },
    { key: "Zip Code", completed: false },
    { key: "Year Of Graduation", completed: false },
    { key: "Interested Industries", completed: false },
    { key: "Unweighted GPA", completed: false },
    { key: "Relevant Courses", completed: false },
    { key: "Extracurriculars", completed: false },
    { key: "Willing Work Days", completed: false },
    { key: "Willing Work Times", completed: false },
    { key: "Starting/Ending Dates", completed: false },
    { key: "Paid/Unpaid Preference", completed: false },
    { key: "Resume", completed: false },
  ],
  [
    { key: "Gender", completed: false },
    { key: "Age", completed: false },
    { key: "Education", completed: false },
  ],
  [
    { key: "Why This Industry Essay", completed: false },
    { key: "Leadership Roles Essay", completed: false },
    { key: "Extra Essay", completed: false },
    { key: "Cover Letter", completed: false },
  ],
  [
    {
      key: "Extracurriculars",
      completed: false,
    },
    {
      key: "Courses",
      completed: false,
    },
  ],
  [{ key: "Reference", completed: false }],
];

const completionChecklistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_COMPLETION_CHECKLIST":
      let newState = state.slice();
      newState[action.page] = action.completionChecklist;
      return newState;
    case "BATCH_UPDATE_COMPLETION_CHECKLIST":
      return action.completionChecklist;
    default:
      return state;
  }
};

export default completionChecklistReducer;
