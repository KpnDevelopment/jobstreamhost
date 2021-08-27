import { LOGIN, CHECK_LOGIN } from "../action/actionType";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
        status: true,
      };
    case CHECK_LOGIN:
      localStorage.setItem("auth-user", JSON.stringify(action.payload.user));
      return {
        ...state,
        login: action.payload.user,
        status: true,
      };
    default:
      return { ...state };
  }
};
