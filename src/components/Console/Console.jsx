import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Console.scss'
class Console extends Component {
  render() {
    const {position} = this.props;
    return (
      <div>
        Here is a 'Console'
      </div>
    );
  }
}
Console.propTypes = {
  position: PropTypes.object.isRequired
}
export default Console
