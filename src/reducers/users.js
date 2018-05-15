import { RECEIVE_USERS } from "../actions/users";
import { SAVE_TWEET } from "../actions/tweets";

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case SAVE_TWEET:
      const { author, id } = action.tweet;
      return {
        ...state,
        [author]: {
          ...state[author],
          tweets: state[author].tweets.concat(id)
        }
      };
    default:
      return state;
  }
}
