// import { saveLikeToggle } from "../utils/api";
import axios from "axios";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const SAVE_TWEET = "SAVE_TWEET";

//CTRL CMND G - TO SELECT ALL ALIKE

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

function likeToggle(info) {
  return {
    type: TOGGLE_TWEET,
    info
  };
}

function saveTweetAction(tweet) {
  return {
    type: SAVE_TWEET,
    tweet
  };
}

export function handleLikeToggle(info) {
  return (dispatch, getState) => {
    // debugger
    const authedInfo = {
      ...info,
      authedUser: getState().authedUser
    };
    //optimistic UI
    dispatch(likeToggle(authedInfo));
    // return saveLikeToggle(authedInfo).catch(e => {
    //   dispatch(likeToggle(authedInfo));
    // });
  };
}

export function handleSaveTweet(tweet) {
  return (dispatch, getState) => {
    const authUser = getState().authedUser;
    const tweetInfo = {
      text: tweet.text,
      author: authUser,
      replyingTo: tweet.replyingTo || null
    };
    return axios.post("/tweets/new", tweetInfo).then(res => {
      dispatch(saveTweetAction(res.data));
    });
  };
}
