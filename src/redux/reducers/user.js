import * as actionTypes from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
  username: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
    // Handle user login
    case actionTypes.LOGOUT_USER:
    // Handle user logout
    default:
      return state;
  }
};

export default userReducer;
