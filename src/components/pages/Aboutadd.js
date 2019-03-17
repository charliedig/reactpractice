import React, { Component } from 'react';

class AboutAdd extends Component {

  render() {
    // navigating to the link though typing it in the URL will reset all state values to default
    // adding consts inside render function

    // destructruing requires the brackets
    const { selectedTodo } = this.props;

    //creatubg a const and using it later on
    // map function returns html jsx
    const selectedTodos = selectedTodo.map((todo) => {
        if (todo.completed){
          return (
            <div>{todo.title}</div>
          )
        } else {
          return (
              null
          )
        }
      })

      // must wrap in a div or react element so the JSx RECOGNIZES THE selectedTodos const

    return (
      <div>
      <h1>Completed Tasks</h1>
              { selectedTodos }
      </div>
    )
  }
}

export default AboutAdd;
