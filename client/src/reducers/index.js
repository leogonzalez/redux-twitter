import { combineReducers } from "redux";
import usersReducer from "./users";
import tweetsReducer from "./tweets";
import authUserReducer from "./authUser";
import {loadingBarReducer} from 'react-redux-loading-bar'

export default combineReducers({
  users: usersReducer,
  tweets: tweetsReducer,
  authedUser: authUserReducer,
  loadingBar: loadingBarReducer
});
