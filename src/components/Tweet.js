import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";

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
      <a className='tweet'>
        <img src={avatar} alt={name} className='avatar'/>
        <div className='tweet-info'>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {
            parent
            ? <p>Replying to: {parent.author}</p>
            :null
          }
          <p>{text}</p>
          <div className='tweet-icons'>
          <span>Reply</span>
          <span>{replies}</span>
          <span>Hearts</span>
          <span>{likes}</span>
          </div>

        </div>
      </a>);
  }
}

function mapStateToProps({tweets, users, authedUser}, {id}) {
  const tweet = tweets[id]
  const author = users[tweet.author]
  const parentTweet = tweets[tweet.replyingTo]
  return formatTweet(tweet, author, authedUser, parentTweet)
}

export default connect(mapStateToProps)(Tweet);
