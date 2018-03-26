import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class List extends Component {

  renderList() {
    return this.props.items.map((item) => {
      return (
        <ListItem key={ item } item={ item }/>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>ToDo</h3>
        <ul>
          { this.renderList() }
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(List);
