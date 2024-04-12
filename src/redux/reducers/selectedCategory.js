const initialState = {
  items: [],
};

const selectedCategory = (state = initialState, action) => {
  if (action.type === "ACTIONS_SELECTED_CATEGORY") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default selectedCategory;
