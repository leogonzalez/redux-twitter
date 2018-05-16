import { RECEIVE_TWEETS, TOGGLE_TWEET, SAVE_TWEET } from "../actions/tweets";

export default function tweetsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return { ...state, ...action.tweets };
    case TOGGLE_TWEET:
      const { id, hasLiked, authedUser } = action.info;
      console.log(id, hasLiked, authedUser);
      return {
        ...state,
        [id]: {
          ...state[id],
          likes:
            hasLiked === true
              ? state[id].likes.filter(name => {
                  return name !== authedUser;
                })
              : state[id].likes.concat(authedUser)
        }
      };
    case SAVE_TWEET:
      let replyingTo = {};
      // const { replyingTo } = action.tweet;
      const newid = action.tweet.id;
      if (action.tweet.replyingTo !== null) {
        replyingTo = {
          ...state[replyingTo],
          replies: state[replyingTo].replies.concat(newid)
        };
      }

      return {
        ...state,
        [newid]: action.tweet,
        ...replyingTo
      };
    default:
      return state;
  }
}
