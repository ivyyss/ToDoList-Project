import React from 'react';
import TodoInput from './todoInput.js';
import 'normalize.css';
import 'reset.css';
import './App.css';
import TodoItem from './TodoItem.js';

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            newTodo: '',
            todoList: [
            ]
        }
    }
    render (){
        let todos = this.state.todoList.map((item, index) => {
        return (<li><TodoItem todo={item} key={index}/></li>)
        })

        console.log(todos)

        return (
            <div className='App'>
                <h1>我的待办</h1>
                <div className='inputWrapper' >
                    <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)} onChange={this.changeTitle.bind(this)}/>
                </div>
                <ol>
                    {todos}
                </ol>
            </div>

        )
    }

    addTodo(event) {
      this.state.todoList.push({
        id: idMaker(),
        title: event.target.value,
        status: null,
        deleted: false
      })
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    }

    changeTitle(event){
      this.setState({
        newTodo: event.target.value,
        todoList: this.state.todoList
      })

    }
}

let id = 0
function idMaker(){
  id+=1
  return id
}

export default App;
