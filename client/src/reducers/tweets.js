import { RECEIVE_TWEETS, TOGGLE_TWEET, SAVE_TWEET } from "../actions/tweets";

export default function tweetsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return { ...state, ...action.tweets };
    case TOGGLE_TWEET:
      const { _id, hasLiked, authedUser } = action.info;
      return {
        ...state,
        [_id]: {
          ...state[_id],
          likes:
            hasLiked === true
              ? state[_id].likes.filter(name => {
                  return name !== authedUser;
                })
              : state[_id].likes.concat(authedUser)
        }
      };
    case SAVE_TWEET:
      let replyingToObj = {};
      const newid = action.tweet._id;
      if (action.tweet.replyingTo) {
        // debugger
        replyingToObj = {
          ...state[action.tweet.replyingTo],
          replies: state[action.tweet.replyingTo].replies.concat(newid)
        };
        return {
          ...state,
          [newid]: action.tweet,
          [action.tweet.replyingTo]: {...replyingToObj}
        };
      }

      return {
        ...state,
        [newid]: action.tweet
      };
    default:
      return state;
  }
}
