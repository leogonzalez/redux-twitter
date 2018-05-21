import socketIOClient from "socket.io-client";
import { receiveTweets } from "../actions/tweets";

export const ioDispatch = dispatch => {
  const socket = socketIOClient("http://localhost:3001");
  socket.on("newTweet", doc => {
    console.log("New Tweet received from server: ", doc);
    dispatch(receiveTweets({ [doc._id]: doc }));
  });
};
