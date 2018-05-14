import { combineReducers } from "redux";
import usersReducer from "./users";
import tweetsReducer from "./tweets";
import authUserReducer from "./authUser";

export default combineReducers({
  users: usersReducer,
  tweets: tweetsReducer,
  authedUser: authUserReducer
});
