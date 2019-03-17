import {Link} from 'react-router-dom';
import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header style = {headerStyle}>
        <h1>Todo List {this.props.headerText}</h1>
        <Link to="/">Home</Link> | <Link to="/about" >About</Link>
        | <Link to="/aboutadd">Selected</Link>
      </header>
    )
  }
}
const headerStyle = {
  background: '#333',
  color: '#fff'
}


export default Header;
