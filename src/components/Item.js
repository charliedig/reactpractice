import React, { Component } from 'react';

class Item extends Component {

  getStyle = () => {
    return {
      background: 'gray',
      borderBottom: '1px #ccc dotted',
      margin: 'none',
      textDecoration: this.props.atodo.completed ?
      'line-through' : 'none'
    }
  }



  render() {
    const { id, title } = this.props.atodo
     return (
      <div style={this.getStyle()}>
        <p>
          <input style={{float: 'left'}} type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
          {title}
          <button style={{color: 'red', cursor: 'pointer', float: 'right'}} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

export default Item;
