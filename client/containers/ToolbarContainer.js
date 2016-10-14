import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { counter } from '../actions'
import styles from './toolbar.local.css'
import Text from '../components/EditingArea/toolbar/text/text'
import Image from '../components/EditingArea/toolbar/image/image'

class ToolbarContainer extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    this.props.dispatch(counter());
  }

  handleBoldClick(e) {
    e.preventDefault;
    this.props.dispatch(textBold());
  }

  render() {
    const increments = this.props.counter;
    return (
      <div className={styles['toolbarContainer']}>
        <h2>This is a toolbar with { increments } increments</h2>
        <Text handleClick={this.handleClick} handleBoldClick={this.handleBoldClick} text={this.props.text}/>
        <Image />
      </div>
    )
  }
}

ToolbarContainer.propTypes = {
  counter: React.PropTypes.number,
  dispatch: React.PropTypes.func,
  text: React.PropTypes.object,
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    text: state.text,
  }
}

export default connect(mapStateToProps)(ToolbarContainer);
