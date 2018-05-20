import { RECEIVE_USERS } from "../actions/users";
import { SAVE_TWEET } from "../actions/tweets";

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    // case SAVE_TWEET:
    //   // debugger;
    //   const { _id } = action.tweet;
    //   return {
    //     ...state,
    //     [_id]: {
    //       ...state[_id],
    //       tweets: state[_id].tweets.concat(_id)
    //     }
    //   };
    default:
      return state;
  }
}
