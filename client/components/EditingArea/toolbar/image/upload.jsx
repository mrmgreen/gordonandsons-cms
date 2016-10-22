import React, { Component } from 'react'
import styles from '../toolbar.local.css'

class Image extends Component {
  constructor(props) {
    super(props);
    this._handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('e.target.files || e.target.value ===', e.target.files);
  }

  render() {
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>Upload image</h3>
        <input
          type="file"
          name="file"
          id="file"
          onChange={this._handleChange}
          ref={(node) => { this.node = node }}
         />
      </div>
    )
  }
}

export default Image;
