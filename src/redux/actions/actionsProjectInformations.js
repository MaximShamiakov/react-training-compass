import axios from "axios";
import { API_URL } from "../../config";

export const fetchModels = () => (dispatch) => {
  axios
    .get(`${API_URL}/projectInformations/`)
    .then((response) => {
      dispatch(actionsProjectInformations(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const actionsProjectInformations = (obj) => ({
  type: "ACTIONS_PROJECT_INFORMATIONS",
  payload: obj,
});
