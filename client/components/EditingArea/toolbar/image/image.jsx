import React, { Component } from 'react'
import styles from '../toolbar.local.css'

class Image extends Component {
  constructor(props) {
    super(props);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(e) {
    console.log('heelo');
  }

  render() {
    return (
      <div
        className={ styles['toolbarComponent'] }
        draggable='true'
        onDragStart={this.handleDrag}
         >
        <h3>This is an image componentz</h3>
      </div>
    )
  }
}

export default Image;
