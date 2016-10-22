import React, { Component } from 'react'
import styles from '../toolbar.local.css'

class Image extends Component {

  render() {
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>Upload image</h3>
        <form onSubmit={this.props.handleOnSubmit}>
          <input type="file" name="file" id="file"></input>
          <button type="submit">Upload</button>
        </form>
        <h3>This is an image component</h3>
        <button>Upload image</button>
      </div>
    )
  }
}

Image.propTypes = {
  handleOnSubmit:React.PropTypes.func,
}

export default Image;
