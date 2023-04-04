/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import Cards from './components/Cards';
import Footer from './components/Footer';
import  todos from './todos.json';

// Main Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos.todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  // method for delete item
  removeTodo(index) {
    if(window.confirm("Are you sure you want delete it?")){
        this.setState({
            todos: this.state.todos.filter((todo, i) =>{
                return i !== index
            })
        })
    }
  }

  // method for add item
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {

    const tasks = this.state.todos.map((todo, i) => {

      return (

        <div className="col-md-4 mt-4" key={i}>
          <Cards task={todo} index={i} onRemoveTodo={this.removeTodo.bind(this, i)}/>
        </div>

      );

    })

    return (

      <div className="App">
        <header className="App-header">
          <Navigation title="Tasks with ReactJs" ntareas={this.state.todos.length} />
        </header>
        
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <h2>Add new task:</h2>
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                { tasks }
              </div>
            </div>

          </div>
        </div>

        <footer className="App-footer" id="footer">
          <Footer />
        </footer>
          
      </div>

    );

  }

  
}

export default App;
