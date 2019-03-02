import React from 'react';
import TodoInput from './todoInput.js';
import 'normalize.css';
import 'reset.css';
import './App.css';
import TodoItem from './TodoItem.js';
import UserDialog from './UserDialog.js';
import {getCurrentUser,logOut} from './leanCloud';

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          user: getCurrentUser()||{},
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
                <header>TO DO LIST
                  {this.state.user.id ? <button onClick={this.logOut.bind(this)}>登出</button> : null}
                </header>
                <div className='dashBoard'>  
                  <p>Hey, {this.state.user.id ||'Friend'} Welcome to list!</p>
                  <i></i>
                </div>
                <div className='inputWrapper' >
                    <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)} onChange={this.changeTitle.bind(this)}/>
                </div>
                <ol className='todoList'>
                    {todos}
                </ol>
                {this.state.user.id ? 
                  null:
                  <UserDialog onSignUp={this.onSignUp.bind(this)} onSignIn={this.onSignIn.bind(this)}/>
                  }
            </div>

        )
    }
    componentDidUpdate(){
    }

    logOut(){
      logOut()
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = {}
      this.setState(stateCopy)
    }
    onSignUp(user){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = user
      this.setState(stateCopy)
    }

    onSignIn(user){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = user
      this.setState(stateCopy)
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

