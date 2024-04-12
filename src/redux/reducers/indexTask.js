const initialState = {
  items: [],
};

const indexTask = (state = initialState, action) => {
  if (action.type === "ACTIONS_INDEX_TASK") {
    if (action.payload.length === 0) {
      return {
        ...state,
        items: [],
      };
    }
    const stateItems = state.items.concat(action.payload);
    return {
      ...state,
      items: stateItems,
    };
  }
  return state;
};

export default indexTask;
