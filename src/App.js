import React from 'react';
import TodoInput from './todoInput.js';
import 'normalize.css';
import 'reset.css';
import './App.css';
import TodoItem from './TodoItem.js';
import UserDialog from './UserDialog.js';

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          user: {},
          newTodo: '',
          todoList:[]
        } 
      }

    render (){
        let todos = this.state.todoList.filter((item)=>!item.deleted).map((item, index) => {
        return (
            <li key={index}>
              <TodoItem todo={item} onToggle={this.toggle.bind(this)} onDelete={this.delete.bind(this)}/>
            </li>
          )
        })


        return (
            <div className='App'>
                <header>TO DO LIST</header>
                <div className='dashBoard'>  
                  <p>Hey, {this.state.user.username}, Welcome to list!</p>
                  <i></i>
                </div>
                <div className='inputWrapper' >
                    <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)} onChange={this.changeTitle.bind(this)}/>
                </div>
                <ol className='todoList'>
                    {todos}
                </ol>
                <UserDialog onSignUp={this.onSignUp.bind(this)}/>
            </div>

        )
    }
    componentDidUpdate(){
    }
    onSignUp(user){
      this.state.user=user
      this.setState(this.state)
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

    toggle(todo,e){
      todo.status=todo.status==='completed'? '':'completed'
      this.setState(this.state)
    }

    delete(todo,e){
      todo.deleted='true'
      this.setState(this.state)
    }
}

let id = 0
function idMaker(){
  id+=1
  return id
}

export default App;
