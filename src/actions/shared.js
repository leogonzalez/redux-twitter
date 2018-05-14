// import { authUser } from "./authUser";
import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";

export function handleInitialData() {
  return dispatch => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
      })
      .catch(err => {
        console.log('Error on Initial Data', err);
      });
  };
}
