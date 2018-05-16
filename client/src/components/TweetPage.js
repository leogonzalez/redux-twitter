import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import Compose from "./Compose";

class TweetPage extends Component {
  render() {
    return (
      <div className='container'>
        {this.props.replyingTo ? <Tweet id={this.props.id} /> : null}
        <Compose replyingTo={this.props.id}/>
        {this.props.replies.length > 0 ? (
          <div>
            <h3>Replies</h3>
            <ul>
              {this.props.replies.map(tid => (
                <li key={tid}>
                  <Tweet id={tid} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ tweets }, { match }) {
  const id = match.params.id;
  const { replyingTo, replies } = tweets[id];
  return {
    replyingTo,
    replies,
    id
  };
}

export default connect(mapStateToProps)(TweetPage);
