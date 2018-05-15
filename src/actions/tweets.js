import { saveLikeToggle } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

//CTRL CMND G - TO SELECT ALL ALIKE

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

export function likeToggle(info) {
  return {
    type: TOGGLE_TWEET,
    info
  };
}

export function handleLikeToggle(info) {
  return (dispatch, getState) => {
    const authedInfo = {
      ...info,
      authedUser: getState().authedUser
    }
    dispatch(likeToggle(authedInfo));
    return saveLikeToggle(authedInfo).catch(e => {
      dispatch(likeToggle(authedInfo));
    });
  };
}
