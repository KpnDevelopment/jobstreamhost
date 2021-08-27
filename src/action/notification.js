import { NEW_NOTIFICATION } from "./actionType";

export const newnotification = (payload) => {
  return {
    type: NEW_NOTIFICATION,
    payload,
  };
};
