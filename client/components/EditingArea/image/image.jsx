import React, { Component } from 'react'

class Image extends Component {
  constsructor(props) {
    super(props);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(e) {
    console.log('heelo');
  }

  render() {
    return (
      <div draggable='true' onDragStart={()=>console.log('heeeee')}></div>
        <h3>This is an image components</h3>
      </div>
    )
  }
}

export default Image;
