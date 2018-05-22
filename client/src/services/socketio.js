import socketIOClient from "socket.io-client";
import { receiveTweets } from "../actions/tweets";

export const ioDispatch = dispatch => {
  let port = "http://localhost:3001";
  if (process.env.NODE_ENV === "production") {
    port = "/";
  }
  const socket = socketIOClient(port);
  socket.on("newTweet", doc => {
    console.log("New Tweet received from server: ", doc);
    dispatch(receiveTweets({ [doc._id]: doc }));
  });
};
