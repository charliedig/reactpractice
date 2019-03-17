import React, { Component } from 'react';

class Item extends Component {

  getStyle = () => {
    return {
      // returns a bunch of jsx css
      background: 'gray',
      borderBottom: '1px #ccc dotted',
      margin: 'none',
      // here we can access props like any other function
      textDecoration: this.props.atodo.completed ?
      'line-through' : 'none'
    }
  }

  giveAlert = (title) => {
    alert(title);
    this.props.setHeader(title);
  }

  render() {
    // more destructuring
    const { id, title } = this.props.atodo
    const { delTodoBlue } = this.props

     return (
       // getting css through a function
      <div style={this.getStyle()}>
        <p>
          <input style={{float: 'left'}} type="checkbox"
           onChange={this.props.markComplete.bind(this, id)}/>
          <span onClick={this.giveAlert.bind(this, title)}>{title}</span>

          <button style={{color: 'red', cursor: 'pointer', float: 'right'}}
                  onClick={this.props.delTodo.bind(this, id)}>x</button>
          <button style={{color: 'blue', cursor: 'pointer', float: 'right'}}
                  onClick={() => {delTodoBlue(id)}}>x</button>
        </p>
      </div>
    )
  }
}

export default Item;
