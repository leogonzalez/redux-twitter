import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { Icon } from "react-materialize";

class Tweet extends Component {
  render() {
    const {
      name,
      id,
      timestamp,
      text,
      avatar,
      likes,
      replies,
      hasLiked,
      parent
    } = this.props;
    return (
      <a className="tweet">
        <img src={avatar} alt={name} className="avatar" />
        <div className="tweet-info">
          <h5>{name}</h5>
          <div>{formatDate(timestamp)}</div>
          <span style={{ color: "gray" }}>
            {parent ? <p>Replying to: {parent.author}</p> : null}
          </span>
          <p className='tweet-text'>{text}</p>
          <div className="tweet-icons">
            <div style={{marginRight:'10px'}}>
              <Icon>reply</Icon>
              <span>{replies}</span>
            </div>
            <div>
              <Icon className={hasLiked?'red-text':''}>{hasLiked ? "favorite" : "favorite_border"}</Icon>
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

function mapStateToProps({ tweets, users, authedUser }, { id }) {
  const tweet = tweets[id];
  const author = users[tweet.author];
  const parentTweet = tweets[tweet.replyingTo];
  return formatTweet(tweet, author, authedUser, parentTweet);
}

export default connect(mapStateToProps)(Tweet);
