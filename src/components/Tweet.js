import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { Icon } from "react-materialize";
import { handleLikeToggle, likeToggle } from "../actions/tweets";

class Tweet extends Component {
  likeHandler = () => {
    const { id, hasLiked } = this.props;
    console.log("CLICK PROPS:", id, hasLiked);
    this.props.dispatch(handleLikeToggle({id, hasLiked}));
  };
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
          <p className="tweet-text">{text}</p>
          <div className="tweet-icons">
            <div style={{ marginRight: "10px" }}>
              <Icon>reply</Icon>
              <span>{replies}</span>
            </div>
            <div onClick={() => this.likeHandler()}>
              <Icon className={hasLiked ? "red-text" : ""}>
                {hasLiked ? "favorite" : "favorite_border"}
              </Icon>
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

function mapStateToProps({ tweets, users, authedUser }, ownProps) {
  const tweet = tweets[ownProps.id];
  const author = users[tweet.author];
  const parentTweet = tweets[tweet.replyingTo];
  return formatTweet(tweet, author, authedUser, parentTweet);
}

export default connect(mapStateToProps)(Tweet);
