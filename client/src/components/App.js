import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./Dashboard";
import Compose from "./Compose";
import TweetPage from "./TweetPage";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading ? null : (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/newtweet" component={Compose} />
                <Route path="/tweet/:id" component={TweetPage}/>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);

// <TweetPage match={{params: {id: '3sklxkf9yyfowrf0o1ftbb'}}} />
