import { combineReducers } from "redux";
import usersReducer from './users'
import tweetsReducer from './tweets'

export default combineReducers({
  users: usersReducer,
  tweets: tweetsReducer
});
