const initialState = {
  items: [],
};

const categoriesReducer = (state = initialState, action) => {
  if (action.type === "ACTIONS_CATEGORIES") {
    console.log(action);
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default categoriesReducer;
