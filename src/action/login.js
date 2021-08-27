import { post, get } from "../utils/agent";
import { LOGIN, ERROR, CHECK_LOGIN } from "./actionType";

export const login = (body) => (dispatch) => {
  post("/user/login", body)
    .then((response) => {
      dispatch(loginRequest(response));
    })
    .catch((err) => {
      dispatch(errorRequest(err));
    });
};

export const loginRequest = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const errorRequest = (err) => {
  return {
    type: ERROR,
    err,
  };
};

export const checklogin = (payload) => {
  return {
    type: CHECK_LOGIN,
    payload,
  };
};

export const checkloginstatus = () => (dispatch) => {
  get("/get")
    .then((response) => {
      dispatch(checklogin(response));
    })
    .catch((err) => {
      dispatch(errorRequest(err));
    });
};
