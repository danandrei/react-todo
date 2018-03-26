import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from '../actions/index'

class ListControls extends Component {

  render() {
    return (
      <div className='list-controls-container'>
        <input type='text' placeholder='Task' ref='input'/>
        <input type='button' value='Add' onClick={() => {
          const value = this.refs.input.value;
          this.props.addItem(value);
          this.refs.input.value = '';
        }} />
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({addItem: addItem}, dispatch);
}

export default connect(null, matchDispatchToProps)(ListControls);
