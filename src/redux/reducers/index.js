import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import questionsTasksReducer from "./questionsTasksReducer";
import selectedCategory from "./selectedCategory";
import indexTask from "./indexTask";
import projectInformationsReducer from "./projectInformationsReducer";
import validationReducer from "./ validationReduse";

const rootReducer = combineReducers({
  categoriesReducer,
  questionsTasksReducer,
  selectedCategory,
  indexTask,
  projectInformationsReducer,
  validationReducer,
});

export default rootReducer;
