import React, { Component } from 'react';
import Item from './Item'
import PropTypes from 'prop-types';

class ToDo extends Component {

  render() {
    return (
      this.props.listoftodo.map((todo) => (
          <Item key={todo.id} atodo={todo} markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}
          />
        ))
    )
  }
}

ToDo.propTypes = {
  listoftodo: PropTypes.array.isRequired
}

export default ToDo;
