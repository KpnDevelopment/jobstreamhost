import { NEW_NOTIFICATION } from "../actions/actionType";

export const notification = (state = {}, action) => {
  switch (action.type) {
    case NEW_NOTIFICATION:
      return {
        ...state,
        message: action.payload,
        status: true,
      };
    default:
      return { ...state };
  }
};
