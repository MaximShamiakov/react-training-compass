const initialState = {
  items: false,
};

const validationReducer = (state = initialState, action) => {
  if (action.type === "ACTIONS_VALIDATION") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default validationReducer;
