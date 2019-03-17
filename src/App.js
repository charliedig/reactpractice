import React, { Component } from 'react';
import './App.css';
import Todo from './components/ToDo';
import Header from './components/layout/header';
import AddTodo from './components/addTodo';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/about';
import AboutAdd from './components/pages/Aboutadd';

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
    ],

    headerText: ''
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

markCompletetwo = (id) => {
  this.setState(
    {
      listoftodo: [...this.state.listoftodo.map((atodo) => {
          if (atodo.id == id) {
            atodo.completed = !atodo.completed
          }
          return atodo;
      })]
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

setHeader = (title) => {
    this.setState({
      headerText:title
    });
}

delTodoBlue = (id) => {
  let newtodo = this.state.listoftodo.filter(atodo => {
    return atodo.id !== id
  })
  this.setState({
      listoftodo: newtodo
  })
}

delTodored = (id) => {
  let newtodo = [...this.state.listoftodo.filter(atodo => {
    return atodo.id !== id
  })]
  this.setState({
      listoftodo: newtodo
  })
}

  render() {
    return (
      <Router>
      <div className="App">
        <Header headerText={this.state.headerText}/>
        <Route exact path="/" render={props => (
          <div>
          <AddTodo addTodo={this.addTodo}/>
          <Todo listoftodo={this.state.listoftodo}
            markComplete={this.markCompletetwo}
            delTodo={this.delTodo}
            setHeader={this.setHeader}
            delTodoBlue={this.delTodored}
            />
          </div>
        )} />
        <Route path="/about" component={About} />
        <Route path="/aboutadd" render={props => (
            <AboutAdd selectedTodo={this.state.listoftodo}/>
          )}
        />
      </div>
      </Router>
    );
  }
}

export default App;
