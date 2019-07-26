import axios from "axios";

import { GET_PROFILES, PROFILE_ERROR } from "./types";

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
