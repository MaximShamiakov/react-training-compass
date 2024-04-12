const initialState = {
  items: [{ question: "Выберете категорию вопросов" }],
};

const questionsTasksReducer = (state = initialState, action) => {
  if (action.type === "ACTIONS_QUESTIONS_TASKS") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default questionsTasksReducer;
