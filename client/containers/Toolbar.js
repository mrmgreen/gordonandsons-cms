import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { counter } from '../actions'
import styles from './toolbar.local.css'
import Text from '../components/EditingArea/toolbar/Text'

class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    this.props.dispatch(counter());
  }

  render() {
    const increments = this.props.counter;
    return (
      <div className={styles['toolbar']}>
        <h2>This is a toolbar with { increments } increments</h2>
        <Text handleClick={this.handleClick}/>
      </div>
    )
  }
}

Toolbar.propTypes = {
  counter: React.PropTypes.number,
  dispatch: React.PropTypes.func,
}

function mapStateToProps(state) {
  console.log('state is:', state);
  return {
    counter: state,
  }
}

export default connect(mapStateToProps)(Toolbar);
