// import { authUser } from "./authUser";
import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { authUser } from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";
const AUTHED_USER = "dan_abramov";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(authUser(AUTHED_USER));
      }).then(() => {
        dispatch(hideLoading())
      })
      .catch(err => {
        console.log("Error on Initial Data", err);
      });
  };
}
