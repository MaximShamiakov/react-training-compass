const initialState = {
  items: [],
};

const projectInformationsReducer = (state = initialState, action) => {
  if (action.type === "ACTIONS_PROJECT_INFORMATIONS") {
    console.log(action);
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default projectInformationsReducer;
