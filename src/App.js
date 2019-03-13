import React, { Component } from 'react';
import './App.css';
import Todo from './components/ToDo'

class App extends Component {
  state = {
    listoftodo: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with friends',
        completed: false
      },
      {
        id: 3,
        title: 'Playing super smash bros',
        completed: false
      }
    ]
  }

markComplete = (id) => {
  this.setState(
    {
      listoftodo: this.state.listoftodo.map((atodo) => {
        if (atodo.id == id) {
          atodo.completed = !atodo.completed
        }
        return atodo;
      })
    }
  );
}

delTodo = (id) => {
  this.setState(
    {
      listoftodo: [...this.state.listoftodo.filter(atodo => atodo.id != id)]
    }
  );
}

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todo listoftodo={this.state.listoftodo} markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
