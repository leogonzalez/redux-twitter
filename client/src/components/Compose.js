import React, { Component } from "react";
import { handleSaveTweet } from "../actions/tweets";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Compose extends Component {
  state = {
    text: ""
  };
  onSubmitHandler(text) {
    const { replyingTo } = this.props;
    this.props.dispatch(handleSaveTweet({ text, replyingTo }));
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="container">
        <h2>Compose new Tweet</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.onSubmitHandler(this.state.text);
          }}
        >
          <textarea
            rows="10"
            name="text"
            onChange={e => {
              this.setState({ text: e.target.value });
            }}
          />
          <button className="btn-tweet">submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Compose));
