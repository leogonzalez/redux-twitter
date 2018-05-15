import { saveLikeToggle, saveTweet } from "../utils/api";

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
    const authedInfo = {
      ...info,
      authedUser: getState().authedUser
    };
    dispatch(likeToggle(authedInfo));
    return saveLikeToggle(authedInfo).catch(e => {
      dispatch(likeToggle(authedInfo));
    });
  };
}

export function handleSaveTweet(tweet) {
  return (dispatch, getState) => {
    const tweetInfo = {
      text: tweet.text,
      author: getState().authedUser,
      replyingTo: tweet.replyingTo || null
    };
    return saveTweet(tweetInfo).then(formattedTweet => {
      dispatch(saveTweetAction(formattedTweet));
    });
  };
}
