import React, { Component } from "react";
import { connect } from "react-redux";

class Compose extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Compose new Tweet</h2>
        <form>
          <textarea rows='10' name='text'/>
          <button className='btn-tweet'>submit</button>
        </form>
      </div>
    );
  }
}

export default Compose;
