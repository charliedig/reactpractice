import React, { Component } from 'react';
import './App.css';
import Todo from './components/ToDo';
import Header from './components/layout/header';
import AddTodo from './components/addTodo';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/about';

class App extends Component {
  state = {
    listoftodo: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with friends',
        completed: false
      },
      {
        id: uuid.v4(),
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

addTodo = (todo) => {
  const newTodo = {
    id: uuid.v4(),
    title: todo,
    completed: false
  }
      this.setState(
        {
          listoftodo: [...this.state.listoftodo, newTodo]
        }
      );
}

  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={props => (
          <div>
          <AddTodo addTodo={this.addTodo}/>
          <Todo listoftodo={this.state.listoftodo} markComplete={this.markComplete}
            delTodo={this.delTodo}/>
          </div>
        )} />
        <Route path="/about" component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
