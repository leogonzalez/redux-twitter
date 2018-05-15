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
      return {
        ...state,
        [action.tweet.id]: action.tweet
      }
    default:
      return state;
  }
}

// [action.id]: {
//   ...state[action.id],
//   likes:
//     action.hasLiked === true
//       ? state[action.id].likes.filter(name => {
//           return name !== action.authedUser;
//         })
//       : state[action.id].likes.concat(action.authedUser)
// }
