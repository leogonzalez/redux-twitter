import React, { Component} from 'react'
import { connect } from 'react-redux'

class Tweet extends Component {
  render() {
    return (
      <p>Tweet: {this.props.id}</p>
    )
  }
}

export default connect()(Tweet)
