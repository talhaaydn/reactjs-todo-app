import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';

class App extends Component {
  state = {
    inputValue: '',
    todos: [
      { value: "Todo 1", done: false },
      { value: "Todo 2", done: true }
     ]   
  } 
  
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit = (e) => {    
    e.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    }

    const newTodos = this.state.todos;
    newTodos.push(newTodo);

    this.setState({ newTodos, inputValue: '' });
  }

  handleClick = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  removeClick = (index) => {
    const todos = this.state.todos;
    todos.splice(index,1);
    this.setState({todos});
  }

  render() {
    return (
      <div className="App">
        <Form 
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
        <List 
          handleClick={this.handleClick}
          removeClick={this.removeClick}
          todos={this.state.todos}
        />
      </div>
    )
  }
}

export default App;
