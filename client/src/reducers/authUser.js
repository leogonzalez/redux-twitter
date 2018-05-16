import { SET_AUTH_USER } from "../actions/authUser";

export default function authUserReducer(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.user;
    default:
      return state;
  }
}
