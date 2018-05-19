// import { authUser } from "./authUser";
import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { authUser } from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import axios from "axios";
const AUTHED_USER = "dan_abramov";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    const users = axios.get('/users');
    const tweets = axios.get('/tweets');
    return Promise.all([users, tweets])
      .then(([users, tweets]) => {

        let userObj = {}
        users.data.map((usr) => userObj[usr._id] = usr)

        let tweetObj = {}
        tweets.data.map((twt) => tweetObj[twt._id] = twt)

        dispatch(receiveUsers(userObj));
        dispatch(receiveTweets(tweetObj));
        dispatch(authUser(AUTHED_USER));
      })
      .then(() => {
        dispatch(hideLoading());
      })
      .catch(err => {
        console.log("Error on Initial Data", err);
      });
  };
}

//
