import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import { NavLink } from "react-router-dom";
// dashboard is a presentational component

function Dashboard(props) {
  return (
    <div className="container">
      <h3 className="center"> Your Timeline </h3>
      <ul>
        {props.tweets.map(tweet => {
          return (
            <NavLink  to={`/tweet/${tweet._id}`} key={tweet._id} activeClassName='active'>
              <Tweet id={tweet._id} />
            </NavLink>
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
      return b.timestamp - a.timestamp;
    });
  return {
    tweets: tweetsArray
  };
}

export default connect(mapStateToProps)(Dashboard);
