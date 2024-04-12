import axios from "axios";
import { API_URL } from "../../config";

export const fetchModels = () => (dispatch) => {
  axios
    .get(`${API_URL}/get_categories/`)
    .then((response) => {
      dispatch(actionsCategories(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const actionsCategories = (obj) => ({
  type: "ACTIONS_CATEGORIES",
  payload: obj,
});
