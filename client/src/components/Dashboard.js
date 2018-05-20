import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
// dashboard is a presentational component

function Dashboard(props) {
  return (
    <div className="container">
      <h3 className="center"> Your Timeline </h3>
      <ul>
        {props.tweets.map(tweet => {
          return (
            <li  key={tweet._id}>
              <Tweet _id={tweet._id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function mapStateToProps({ tweets }) {
  const tweetsArray = Object.keys(tweets)
    .map(tweet => {
      return tweets[tweet];
    })
    .sort((a, b) => {
      return Date.parse(b.timestamp) - Date.parse(a.timestamp);
    });
  return {
    tweets: tweetsArray
  };
}

export default connect(mapStateToProps)(Dashboard);
