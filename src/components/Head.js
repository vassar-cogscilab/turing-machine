import React, { PropTypes } from 'react';
import Draggable from 'react-draggable';


class Head extends React.Component {
  render() {
    return (
      <Draggable
        axis="x"
        handle=".header"
        defaultPosition={{x: 499, y: 0}}
        position={null}
        grid={[49, 0]}
        zIndex={100}
        bounds={{left: 9, top: 0, right: 989, bottom: 0}} 
        onStart={this.props.handleStart}
        onDrag={this.props.handleDrag}
        onStop={this.props.handleStop}>
        <div  className="header">
          <div className="hair"></div>
          <input 
            className="head" 
            value={(this.props.value)?this.props.value:""} 
            disabled={!this.props.editable} 
            onChange={this.props.onChange} >
          </input>
          <div className="neck"></div>
          <div className="shoulder"></div>
        </div>
      </Draggable>
      );
  }
}

Head.PropTypes = {
  handleStart: PropTypes.func.isRequired,
  handleDrag: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Head;