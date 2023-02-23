import * as actionTypes from "../constants/actionTypes";

export const login = (username, password) => {
  return {
    type: actionTypes.LOGIN,
    payload: { username, password },
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

// Other action creators related to user
