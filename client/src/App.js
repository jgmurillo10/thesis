import React, { Component } from 'react';
import './App.css';
import './basic.css';

class App extends Component {
  state = {users:[]}
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }
  render() {
    return (
       <div class="container">
            <div class="header">HEADER</div>
            <div class="menu">MENU</div>
            <div class="content">CONTENT</div>
            <div class="footer">FOOTER</div>
        </div>
    );
  }
}

export default App;