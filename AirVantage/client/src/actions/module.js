import axios from "axios";
import { setAlert } from "./alert";

import { 
  GET_PROFILE, 
  GET_PROFILES, 
  PROFILE_ERROR,
  DELETE_PROFILE
} from "./types";

// Get all module profiles
export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/module");
    console.log(res.data);
    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/module", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Delete profile
export const deleteProfile = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/module/${id}`);

    dispatch({
      type: DELETE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("Profile is removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};