import React from 'react';
import TodoInput from './todoInput.js';
import 'normalize.css';
import 'reset.css';
import './App.css';
import TodoItem from './TodoItem.js';
import * as localStorage from './localStorage.js';

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            newTodo: '',
            todoList:localStorage.load('todoList')
        }
    }
    render (){
        let todos = this.state.todoList.filter((item)=>!item.deleted).map((item, index) => {
        return (<li><TodoItem todo={item} key={index} onToggle={this.toggle.bind(this)} onDelete={this.delete.bind(this)}/></li>)
        })


        return (
            <div className='App'>
                <h1>我的待办</h1>
                <div className='inputWrapper' >
                    <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)} onChange={this.changeTitle.bind(this)}/>
                </div>
                <ol className='todoList'>
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
      localStorage.save('todoList',this.state.todoList)
    }

    changeTitle(event){
      this.setState({
        newTodo: event.target.value,
        todoList: this.state.todoList
      })
      localStorage.save('todoList',this.state.todoList)

    }

    toggle(todo,e){
      todo.status=todo.status==='completed'? '':'completed'
      this.setState(this.state)
      localStorage.save('todoList',this.state.todoList)
    }

    delete(todo,e){
      todo.deleted='true'
      this.setState(this.state)
      localStorage.save('todoList',this.state.todoList)
    }
}

let id = 0
function idMaker(){
  id+=1
  return id
}

export default App;
