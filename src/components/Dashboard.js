import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
// dashboard is a presentational component

function Dashboard(props) {
  return (
    <div>
      <h1> Your Timeline </h1>
      <ul>
      {props.tweets.map((tweet) => {
        return (
          <li key={tweet.id}>
            <Tweet id={tweet.id}/>
          </li>
        )
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
      return b.timestamp - a.timestamp;
    });
  return {
    tweets: tweetsArray
  };
}

export default connect(mapStateToProps)(Dashboard);
